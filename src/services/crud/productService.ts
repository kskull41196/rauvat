import { CrudService, ICrudOption } from '../crudService.pg'
import {
    Product,
    GlobalCategory
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

export class ProductService extends CrudService<typeof Product> {
    constructor() {
        super(Product)
    }

    async filter(params: IFilterProduct, option: ICrudOption = {
        limit: config.database.defaultPageSize,
        offset: 0,
        scope: ['defaultScope']
    }) {
        let {
            name,
            global_category_id,
            area_id,
            is_quick_post,
            trade_type,
            point,
            radius
        } = params;

        let query: any = {
            where: {

            }
        }

        if (name) {
            query.where.name = name;
        }
        if (global_category_id) {
            query.where.global_category_id = global_category_id
        }
        if (area_id) {
            query.where.global_area_id = area_id;
        }
        if (is_quick_post) {

        }
        if (trade_type) {

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

        option.filter = query.where;

        return await this.exec(
            this.modelWithScope(option.scope)
                .findAndCountAll(this.applyFindOptions(option))
        )

        // return await this.exec(Product.findAndCountAll(query));

    }

    async postProduct(params: IPostProduct) {
        let {
            global_category_id,
            is_buy
        } = params;

        if (is_buy) params.type = 'BUY';
        else params.type = 'SELL'

        params.state = 'REVIEW';

        const t = await sequelize.transaction();

        try {
            let product = await this.exec(Product.create(params, {
                transaction: t
            }))

            let global_category = await this.exec(GlobalCategory.findOne({
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
        let {
            global_category_id,
            is_buy
        } = params;

        if (is_buy) params.type = 'BUY';
        else params.type = 'SELL'

        params.state = 'VALID';

        const t = await sequelize.transaction();

        try {
            let product = await this.exec(Product.create(params, {
                transaction: t
            }))

            let global_category = await this.exec(GlobalCategory.findOne({
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

}