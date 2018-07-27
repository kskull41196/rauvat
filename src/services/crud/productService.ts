import { CrudService, ICrudOption } from '../crudService.pg'
import { errorService, firebaseService } from '@/services'
import {
    Product,
    GlobalCategory,
    GlobalArea,
    User,
    Employee,
    FavoriteProduct,
    ProductPost,
    BillItem,
    ProductGlobalAttribute
} from '@/models'
import {
    Sequelize,
    sequelize
} from '@/models'
import CONST from '@/const'
import * as geolib from 'geolib'
import { config } from '@/config'
import {
    IFilterProduct,
    IPostProduct,
    IPostQuickProduct
} from '@/interfaces'
import { FCM_ACTIONS } from '../../const'
export class ProductService extends CrudService<typeof Product> {
    constructor() {
        super(Product)
    }

    async filter(params: IFilterProduct, option: ICrudOption = {
        limit: config.database.defaultPageSize,
        offset: 0,
        scope: ['defaultScope']
    }) {
        const {
            name,
            global_category_id,
            area_id,
            is_quick_post,
            trade_type,
            point,
            radius
        } = params;
 
        const query: any = {
            where: {
                updated_id: null, // It must be null here instead of undefined
                state: 'VALID'
            }
        }

        if (name) {
            query.where.name = name;
        }
        if (global_category_id) {
            query.where.global_category_id = global_category_id
        }
        if (is_quick_post == true || is_quick_post == false) {
            if (is_quick_post == true)
                query.where.is_limit_duration = false;
            else if (is_quick_post == false) query.where.is_limit_duration = true;
        }
        if (trade_type) {
            query.where = Object.assign(query.where, {
                type: trade_type
            });
        }
        if (point && radius) {
            query.where = Sequelize.and(Sequelize.where(
                Sequelize.fn('ST_DWithin',
                    Sequelize.col('position'),
                    Sequelize.fn('ST_SetSRID',
                        Sequelize.fn('ST_MakePoint',
                            point.longitude, point.latitude),
                        4326),
                    radius * CONST.METER_TO_MILE),
                true), query.where)
        }
        if (!radius && area_id) {
            const area_ids: any[] = [area_id];

            let parent_ids = [area_id];
            while (true) {
                const global_areas = await this.exec(GlobalArea.findAndCountAll({
                    where: {
                        parent_id: {
                            $in: parent_ids
                        }
                    },
                    attributes: ['id']
                }))

                if (global_areas.count === 0) break;

                parent_ids = global_areas.rows.map((area: {
                    id: string
                }) => {
                    area_ids.push(area.id);
                    return area.id
                })
            }

            query.where.global_area_id = {
                $in: area_ids
            }
        }

        option.filter = query.where;

        return await this.exec(
            this.modelWithScope(option.scope)
                .findAndCountAll(this.applyFindOptions(option))
        )
    }

    async postProduct(params: IPostProduct) {
        const {
            global_category_id,
            is_buy
        } = params;

        if (is_buy) params.type = 'BUY';
        else params.type = 'SELL'

        params.state = 'REVIEW';

        const t = await sequelize.transaction();

        try {
            const product = await this.exec(Product.create(params, {
                transaction: t
            }))

            const global_category = await this.exec(GlobalCategory.findOne({
                where: {
                    id: global_category_id
                },
                transaction: t
            }))

            await this.exec(GlobalCategory.update({
                amount_of_product: global_category.amount_of_product + 1
            }, {
                    where: {
                        id: global_category_id
                    },
                    transaction: t
                }))

            t.commit();
            return product;
        }
        catch (e) {
            t.rollback();
            throw e;
        }

    }

    async postQuickProduct(params: IPostQuickProduct) {
        const {
            global_category_id,
            is_buy
        } = params;

        if (is_buy) params.type = 'BUY';
        else params.type = 'SELL'

        params.state = 'VALID';

        const t = await sequelize.transaction();

        try {
            const product = await this.exec(Product.create(params, {
                transaction: t
            }))

            const global_category = await this.exec(GlobalCategory.findOne({
                where: {
                    id: global_category_id
                },
                transaction: t
            }))

            await this.exec(GlobalCategory.update({
                amount_of_product: global_category.amount_of_product + 1
            }, {
                    where: {
                        id: global_category_id
                    },
                    transaction: t
                }))

            t.commit();
            return product;
        }
        catch (e) {
            t.rollback();
            throw e;
        }
    }
    async update(params: any, option?: ICrudOption) {
        const item = await this.exec(this.model.findById(option.filter.id), { allowNull: false })
        // get data from params to item
        const keys = Object.keys(params);
        for (let j = 0; j < keys.length; j++) {
            item.dataValues[keys[j]] = params[keys[j]];
        }
        item.dataValues.id = undefined
        item.dataValues.created_at = undefined
        item.dataValues.updated_at = undefined
        item.dataValues.deleted_at = undefined
        item.dataValues.status = undefined
        item.dataValues.editor = undefined
        item.dataValues.editor_type = undefined
        const createProduct = await this.exec(
            this.model.create(item.dataValues, this.applyCreateOptions(option))
        )
        item.dataValues.id = option.filter.id;

        params.updated_id = createProduct.id;
        let editor_type;
        if (params.editor_role == 'ADMIN') {
            params.editor_type = "EMPLOYEE"
            editor_type = params.editor_type
        } else {
            params.editor_type = "USER"
            editor_type = params.editor_type
        }
        const updated_id = params.updated_id;
        const editor = params.editor;
        const itemUser = await this.exec(User.findOne({ where: { id: item.user_id } }), { allowNull: false })
        const registrationToken = itemUser.registation_id;
        const message = "Sản Phẩm " + item.name + " Của Bạn Vừa Được Cập Nhật"
        let action;
        if (createProduct.state == "VALID") {
            action = FCM_ACTIONS.PRODUCT_VALID
        } else
        if (createProduct.state == "BANNED") {
            action = FCM_ACTIONS.PRODUCT_BANNED
        } else
        if (createProduct.state == "OUTDATED") {
            action = FCM_ACTIONS.PRODUCT_EXPIRED
        } else
        if (createProduct.state == "REVIEW") {
            action = FCM_ACTIONS.PRODUCT_REVIEW
        }
        firebaseService.sendNotification(registrationToken, message, action)
        await this.exec(item.update({ editor_type, updated_id, editor }))
        await this.exec(FavoriteProduct.update({ product_id: createProduct.id }, { where: { product_id: item.id } }))
        await this.exec(ProductPost.update({ product_id: createProduct.id }, { where: { product_id: item.id } }))
        await this.exec(BillItem.update({ product_id: createProduct.id }, { where: { product_id: item.id } }))
        await this.exec(ProductGlobalAttribute.update({ product_id: createProduct.id }, { where: { product_id: item.id } }))
        return createProduct
    }
    async getProductWithHistory(params: any, option?: ICrudOption) {
        const item = await this.exec(this.model.findById(option.filter.id), { allowNull: false })
        const product = JSON.parse(JSON.stringify(item));

        const object = [];
        let findProductHistory;
        try {
            findProductHistory = await this.exec(Product.findOne({ where: { updated_id: item.id } }), { allowNull: false })
        } catch (e) {
            return { current_product: product }
        }

        object.push(findProductHistory);
        let editor;
        if (findProductHistory.editor_type == 'USER') {
            editor = await this.exec(User.findOne({ where: { id: findProductHistory.editor } }), { allowNull: false })
        } else { 
            editor = await this.exec(Employee.findOne({ where: { id: findProductHistory.editor } }), { allowNull: false })
        }

        while (true) {
            try {
                findProductHistory = await this.exec(Product.findOne({ where: { updated_id: findProductHistory.id } }), { allowNull: false })
                object.push(findProductHistory);
                console.log("aaaaa " + findProductHistory.updated_id);
            } catch (e) {
                break;
            }
        }

        const current_product = { product, editor };
        return { current_product, history: object }
    }
    async getList(option: ICrudOption = {
        limit: config.database.defaultPageSize,
        offset: 0,
        scope: ['defaultScope']
    }) {
        option.filter['updated_id'] = null
        return await this.exec(
            this.modelWithScope(option.scope)
                .findAndCountAll(this.applyFindOptions(option))
        )
    }
}