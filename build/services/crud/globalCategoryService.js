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
const base_1 = require("@/models/base");
class GlobalCategoryService extends crudService_pg_1.CrudService {
    constructor() {
        super(models_1.GlobalCategory);
    }
    addAttributes(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let { category_id } = params;
            const t = yield base_1.sequelize.transaction();
            try {
                let attribute = yield this.exec(models_1.GlobalAttribute.create(params, {
                    transaction: t
                }));
                // let products = await this.exec(Product.findAll({
                //     where: {
                //         global_category_id: category_id
                //     },
                //     attributes: ['id'],
                //     transaction: t
                // }))
                // let bulk_products = products.map((product: any) => {
                //     return {
                //         product_id: product.id,
                //         global_attribute_id: attribute.id
                //     }
                // });
                // let product_attributes = await this.exec(ProductGlobalAttribute.bulkCreate(bulk_products, {
                //     transaction: t
                // }));
                let category_attributes = yield this.exec(models_1.GlobalCategoryAndAttribute.create({
                    global_category_id: category_id,
                    global_attribute_id: attribute.id
                }, {
                    transaction: t
                }));
                t.commit();
                return {
                    attribute,
                    category_attributes
                };
            }
            catch (e) {
                t.rollback();
                throw e;
            }
        });
    }
    deleteAttributes(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let { category_id, attribute_id } = params;
            // let products = await Product.findAll({
            //     where: {
            //         global_category_id: category_id
            //     },
            //     attributes: ['id']
            // });
            // let product_ids = products.map((product: any) => {
            //     return product.id;
            // });
            return yield this.exec(models_1.GlobalCategoryAndAttribute.destroy({
                where: {
                    global_category_id: category_id,
                    global_attribute_id: attribute_id
                }
            }));
        });
    }
}
exports.GlobalCategoryService = GlobalCategoryService;
//# sourceMappingURL=globalCategoryService.js.map