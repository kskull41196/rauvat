import { CrudService, ICrudOption } from '../crudService.pg'
import {
    GlobalCategory,
    Product,
    ProductGlobalAttribute,
    GlobalAttribute
} from '@/models'
import {
    sequelize,
    Sequelize
} from '@/models/base'

export class GlobalCategoryService extends CrudService<typeof GlobalCategory> {
    constructor() {
        super(GlobalCategory)
    }

    async addAttributes(params: any) {
        let {
            category_id
        } = params;

        const t = await sequelize.transaction();

        try {
            let attribute = await this.exec(GlobalAttribute.create(params, {
                transaction: t
            }));

            let products = await this.exec(Product.findAll({
                where: {
                    global_category_id: category_id
                },
                attributes: ['id'],
                transaction: t
            }))

            let bulk_products = products.map((product: any) => {
                return {
                    product_id: product.id,
                    global_attribute_id: attribute.id
                }
            });

            let product_attributes = await this.exec(ProductGlobalAttribute.bulkCreate(bulk_products, {
                transaction: t
            }));

            t.commit();


            return {
                attribute,
                product_attributes
            }

        }
        catch (e) {
            t.rollback();
            throw e;
        }

    }

    async deleteAttributes(params: any) {
        let {
            category_id,
            attribute_id
        } = params;

        let products = await Product.findAll({
            where: {
                global_category_id: category_id
            },
            attributes: ['id']
        });

        let product_ids = products.map((product: any) => {
            return product.id;
        });

        return await this.exec(ProductGlobalAttribute.destroy({
            where: {
                product_id: {
                    $in: product_ids
                },
                global_attribute_id: attribute_id
            }
        }));

    }


}