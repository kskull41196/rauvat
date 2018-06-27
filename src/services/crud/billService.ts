import { errorService } from '@/services'
import { ICreateOrder } from '@/interfaces'
import {
    sequelize,
    Bill, Product, BillItem, BillActivity, PaidHistory, User, Employee
} from '@/models'
import { CrudService, ICrudOption } from '../crudService.pg'
import { config } from '@/config'

export class BillService extends CrudService<typeof Bill> {
    constructor() {
        super(Bill)
    }
    async update(params: any, option?: ICrudOption) {
        const item = await this.exec(this.model.findById(option.filter.id), { allowNull: false })
        //get data from params to item
        var keys = Object.keys(params);
        for (var j = 0; j < keys.length; j++) {
            item.dataValues[keys[j]] = params[keys[j]];
        }
        if (params.editor_role == 'ADMIN') {
            item.dataValues.editor_type = "EMPLOYEE"
        } else {
            item.dataValues.editor_type = "USER"
        }
        item.dataValues.origin_id = item.id
        item.dataValues.id = undefined
        item.dataValues.created_at = undefined
        item.dataValues.updated_at = undefined
        item.dataValues.deleted_at = undefined
        item.dataValues.status = undefined
        const createBill = await this.exec(
            this.model.create(item.dataValues, this.applyCreateOptions(option))
        )
        return createBill
    }
    async getBillWithHistory(params: any, option?: ICrudOption) {
        let item = await this.exec(this.model.findById(option.filter.id), { allowNull: false })
        const bill = await this.exec(this.model.findById(option.filter.id), { allowNull: false })
        if (item.editor_type == 'USER') {
            var editor_user = await this.exec(User.findOne({ where: { id: item.editor } }), { allowNull: false })
        }
        if (item.editor_type == 'EMPLOYEE') {
            var editor_employee = await this.exec(Employee.findOne({ where: { id: item.editor } }), { allowNull: false })
        }
        const current_bill = { bill, editor: editor_user || editor_employee }
        let object = [];
        while (item.origin_id != undefined) {
            item = await this.exec(this.model.findOne({ where: { id: item.origin_id } }), { allowNull: false })
            object.push(item);
        }

        return { current_bill, history: object }
    }
    async getList(option: ICrudOption = {
        limit: config.database.defaultPageSize,
        offset: 0,
        scope: ['defaultScope']
    }) {
        option.filter['origin_id'] = null
        return await this.exec(
            this.modelWithScope(option.scope)
                .findAndCountAll(this.applyFindOptions(option))
        )
    }
    async bulkCreateBillItem(params: {
        items: {
            product_id: string,
            amount: number
        }[]
    }, bill_id: string) {
        const {
            items
        } = params;

        const bulk_items = []
        let total_price = 0;

        for (const item of items) {
            const product = await Product.findOne({
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
        const {
            items
        } = params;

        const t = await sequelize.transaction();

        try {
            let bill = await this.exec(Bill.create(params, {
                transaction: t
            }))

            const {
                bulk_items,
                total_price
            } = await this.bulkCreateBillItem({
                items: items
            }, bill.id)

            const bill_items = await this.exec(BillItem.bulkCreate(bulk_items, {
                transaction: t
            }))

            const bill_activity = await this.exec(BillActivity.create({
                action: 'ORDERED',
                bill_id: bill.id
            }, {
                    transaction: t
                }));

            const paid_history = await this.exec(PaidHistory.create({
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

    async getBill(option: {
        user_id: string,
        id: string
    }) {

        return await this.exec(Bill.findOne({
            where: {
                $or: [
                    {
                        id: option.id,
                        buyer_id: option.user_id
                    },
                    {
                        id: option.id,
                        seller_id: option.user_id
                    }
                ]
            },
            include: [
                {
                    association: 'activity'
                },
                {
                    association: 'items',
                    include: {
                        association: 'product'
                    }
                }
            ],
            attributes: {
                include: [
                    [sequelize.where(sequelize.col('buyer_id'), option.user_id), 'is_buy']
                ]
            }
        }))
    }

    async changeBillActivity(params: any) {
        const {
            bill_id,
            action
        } = params;

        const t = await sequelize.transaction();

        try {
            const bill_activity = await this.exec(BillActivity.create({
                bill_id,
                action
            }, {
                    transaction: t
                }))

            await this.exec(Bill.update({
                current_bill_activity_id: bill_activity.id
            }, {
                    where: {
                        id: bill_id
                    },
                    transaction: t
                }))
            t.commit();
            return bill_activity
        }

        catch (e) {
            t.rollback();
            throw e;
        }

    }
}