import { CrudService, ICrudOption } from '../crudService.pg'
import {
    Bill,
    sequelize,
    PaidHistory,
    BillActivity,
    BillItem,
    Product
} from '@/models'

import {
    errorService
} from '@/services'

import {
    ICreateOrder
} from '@/interfaces'

export class BillService extends CrudService<typeof Bill> {
    constructor() {
        super(Bill)
    }

    async bulkCreateBillItem(params: {
        items: {
            product_id: string,
            amount: number
        }[]
    }, bill_id: string) {
        let {
            items
        } = params;

        let bulk_items = []
        let total_price = 0;

        for (let item of items) {
            let product = await Product.findOne({
                where: {
                    id: item.product_id
                }
            })
            if (!product) throw errorService.database.recordNotFound("Product not found " + item.product_id)
            total_price += item.amount * product.price;
            bulk_items.push({
                product_id: item.product_id,
                amount: item.amount,
                price: product.price,
                bill_id
            })
        }

        return {
            total_price: total_price,
            bulk_items: bulk_items
        };
    }
    async createOrder(params: ICreateOrder) {
        let {
            items
        } = params;

        const t = await sequelize.transaction();

        try {
            let bill = await this.exec(Bill.create(params, {
                transaction: t
            }))

            let {
                bulk_items,
                total_price
            } = await this.bulkCreateBillItem({
                items: items
            }, bill.id)

            let bill_items = await this.exec(BillItem.bulkCreate(bulk_items, {
                transaction: t
            }))

            let bill_activity = await this.exec(BillActivity.create({
                action: 'ORDERED',
                bill_id: bill.id
            }, {
                    transaction: t
                }));

            let paid_history = await this.exec(PaidHistory.create({
                bill_id: bill.id,
                remain_amount: total_price
            }, {
                    transaction: t
                }));

            bill = await bill.update({
                current_paid_history_id: paid_history.id,
                current_bill_activity_id: bill_activity.id,
                total_price: total_price
            }, {
                    transaction: t
                })


            t.commit();
            return {
                bill,
                paid_history,
                bill_activity,
                bill_items
            };

        }
        catch (e) {
            console.log(e);
            t.rollback();
            throw e;
        }
    }

}