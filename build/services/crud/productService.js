"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const crudService_pg_1 = require("../crudService.pg");
const models_1 = require("@/models");
const models_2 = require("@/models");
const const_1 = require("@/const");
const config_1 = require("@/config");
class ProductService extends crudService_pg_1.CrudService {
    constructor() {
        super(models_1.Product);
    }
    filter(params, option = {
        limit: config_1.config.database.defaultPageSize,
        offset: 0,
        scope: ['defaultScope']
    }) {
        return __awaiter(this, void 0, void 0, function* () {
            let { name, global_category_id, area_id, is_quick_post, trade_type, point, radius } = params;
            const query = {
                where: {}
            };
            if (name) {
                query.where.name = name;
            }
            if (global_category_id) {
                query.where.global_category_id = global_category_id;
            }
            if (area_id) {
                let area_ids = [area_id];
                let parent_ids = [area_id];
                while (true) {
                    let global_areas = yield this.exec(models_1.GlobalArea.findAndCountAll({
                        where: {
                            parent_id: {
                                $in: parent_ids
                            }
                        },
                        attributes: ['id']
                    }));
                    if (global_areas.count === 0)
                        break;
                    parent_ids = global_areas.rows.map((area) => {
                        area_ids.push(area.id);
                        return area.id;
                    });
                }
                query.where.global_area_id = {
                    $in: area_ids
                };
            }
            if (is_quick_post == true || is_quick_post == false) {
                if (is_quick_post == true)
                    query.where.is_limit_duration = false;
                else if (is_quick_post == false)
                    query.where.is_limit_duration = true;
            }
            if (trade_type) {
                query.where = Object.assign(query.where, {
                    type: trade_type
                });
            }
            if (point && radius) {
                query.where = models_2.Sequelize.and(models_2.Sequelize.where(models_2.Sequelize.fn('ST_DWithin', models_2.Sequelize.col('position'), models_2.Sequelize.fn('ST_SetSRID', models_2.Sequelize.fn('ST_MakePoint', point.longitude, point.latitude), 4326), radius * const_1.default.METER_TO_MILE), true), query.where);
            }
            option.filter = query.where;
            return yield this.exec(this.modelWithScope(option.scope)
                .findAndCountAll(this.applyFindOptions(option)));
        });
    }
    postProduct(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { global_category_id, is_buy } = params;
            if (is_buy)
                params.type = 'BUY';
            else
                params.type = 'SELL';
            params.state = 'REVIEW';
            const t = yield models_2.sequelize.transaction();
            try {
                const product = yield this.exec(models_1.Product.create(params, {
                    transaction: t
                }));
                const global_category = yield this.exec(models_1.GlobalCategory.findOne({
                    where: {
                        id: global_category_id
                    },
                    transaction: t
                }));
                yield this.exec(models_1.GlobalCategory.update({
                    amount_of_product: global_category.amount_of_product + 1
                }, {
                    where: {
                        id: global_category_id
                    },
                    transaction: t
                }));
                t.commit();
                return product;
            }
            catch (e) {
                t.rollback();
                throw e;
            }
        });
    }
    postQuickProduct(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { global_category_id, is_buy } = params;
            if (is_buy)
                params.type = 'BUY';
            else
                params.type = 'SELL';
            params.state = 'VALID';
            const t = yield models_2.sequelize.transaction();
            try {
                const product = yield this.exec(models_1.Product.create(params, {
                    transaction: t
                }));
                const global_category = yield this.exec(models_1.GlobalCategory.findOne({
                    where: {
                        id: global_category_id
                    },
                    transaction: t
                }));
                yield this.exec(models_1.GlobalCategory.update({
                    amount_of_product: global_category.amount_of_product + 1
                }, {
                    where: {
                        id: global_category_id
                    },
                    transaction: t
                }));
                t.commit();
                return product;
            }
            catch (e) {
                t.rollback();
                throw e;
            }
        });
    }
    update(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.exec(this.model.findById(option.filter.id), { allowNull: false });
            //get data from params to item
            var keys = Object.keys(params);
            for (var j = 0; j < keys.length; j++) {
                item.dataValues[keys[j]] = params[keys[j]];
            }
            item.dataValues.id = undefined;
            item.dataValues.created_at = undefined;
            item.dataValues.updated_at = undefined;
            item.dataValues.deleted_at = undefined;
            item.dataValues.status = undefined;
            item.dataValues.editor = undefined;
            item.dataValues.editor_type = undefined;
            const createProduct = yield this.exec(this.model.create(item.dataValues, this.applyCreateOptions(option)));
            item.dataValues.id = option.filter.id;
            params.updated_id = createProduct.id;
            var editor_type;
            if (params.editor_role == 'ADMIN') {
                params.editor_type = "EMPLOYEE";
                editor_type = params.editor_type;
            }
            else {
                params.editor_type = "USER";
                editor_type = params.editor_type;
            }
            const updated_id = params.updated_id;
            const editor = params.editor;
            yield this.exec(item.update({ editor_type, updated_id, editor }));
            yield this.exec(models_1.FavoriteProduct.update({ product_id: createProduct.id }, { where: { product_id: item.id } }));
            yield this.exec(models_1.ProductPost.update({ product_id: createProduct.id }, { where: { product_id: item.id } }));
            yield this.exec(models_1.BillItem.update({ product_id: createProduct.id }, { where: { product_id: item.id } }));
            yield this.exec(models_1.ProductGlobalAttribute.update({ product_id: createProduct.id }, { where: { product_id: item.id } }));
            return createProduct;
        });
    }
    getProductWithHistory(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            let item = yield this.exec(this.model.findById(option.filter.id), { allowNull: false });
            var product = JSON.parse(JSON.stringify(item));
            let object = [];
            let findProductHistory;
            try {
                findProductHistory = yield this.exec(models_1.Product.findOne({ where: { updated_id: item.id } }), { allowNull: false });
            }
            catch (e) {
                return { current_product: product };
            }
            object.push(findProductHistory);
            if (findProductHistory.editor_type == 'USER') {
                var editor_user = yield this.exec(models_1.User.findOne({ where: { id: findProductHistory.editor } }), { allowNull: false });
            }
            if (findProductHistory.editor_type == 'EMPLOYEE') {
                var editor_employee = yield this.exec(models_1.Employee.findOne({ where: { id: findProductHistory.editor } }), { allowNull: false });
            }
            while (true) {
                try {
                    findProductHistory = yield this.exec(models_1.Product.findOne({ where: { updated_id: findProductHistory.id } }), { allowNull: false });
                    object.push(findProductHistory);
                    console.log("aaaaa " + findProductHistory.updated_id);
                }
                catch (e) {
                    break;
                }
            }
            const current_product = { product, editor: editor_user || editor_employee };
            return { current_product, history: object };
        });
    }
    getList(option = {
        limit: config_1.config.database.defaultPageSize,
        offset: 0,
        scope: ['defaultScope']
    }) {
        return __awaiter(this, void 0, void 0, function* () {
            option.filter['updated_id'] = null;
            return yield this.exec(this.modelWithScope(option.scope)
                .findAndCountAll(this.applyFindOptions(option)));
        });
    }
}
exports.ProductService = ProductService;
//# sourceMappingURL=productService.js.map