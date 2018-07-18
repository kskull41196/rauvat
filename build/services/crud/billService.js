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
const services_1 = require("@/services");
const models_1 = require("@/models");
const crudService_pg_1 = require("../crudService.pg");
const config_1 = require("@/config");
class BillService extends crudService_pg_1.CrudService {
    constructor() {
        super(models_1.Bill);
    }
    update(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.exec(models_1.Bill.findById(option.filter.id), { allowNull: false });
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
            const createBill = yield this.exec(this.model.create(item.dataValues, this.applyCreateOptions(option)));
            item.dataValues.id = option.filter.id;
            params.updated_id = createBill.id;
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
            const itemBuyer = yield this.exec(models_1.User.findOne({ where: { id: item.buyer_id } }), { allowNull: false });
            const itemSeller = yield this.exec(models_1.User.findOne({ where: { id: item.seller_id } }), { allowNull: false });
            const registrationTokenBuyer = itemBuyer.registation_id;
            const registrationTokenSeller = itemSeller.registation_id;
            var message = "Cập Nhật Thông Tin Đơn Hàng Của Tài Khoản " + itemBuyer.username + "Và" + itemSeller.username + " Thành công";
            services_1.firebaseService.sendNotification(registrationTokenBuyer, message);
            yield this.exec(item.update({ editor_type, updated_id, editor }));
            yield this.exec(models_1.BillItem.update({ bill_id: createBill.id }, { where: { bill_id: item.id } }));
            yield this.exec(models_1.BillActivity.update({ bill_id: createBill.id }, { where: { bill_id: item.id } }));
            yield this.exec(models_1.PaidHistory.update({ bill_id: createBill.id }, { where: { bill_id: item.id } }));
            return createBill;
        });
    }
    getBillWithHistory(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            let item = yield this.exec(this.model.findById(option.filter.id), { allowNull: false });
            var bill = JSON.parse(JSON.stringify(item));
            let object = [];
            let findBillHistory;
            try {
                findBillHistory = yield this.exec(models_1.Bill.findOne({ where: { updated_id: item.id } }), { allowNull: false });
            }
            catch (e) {
                return { current_bill: bill };
            }
            object.push(findBillHistory);
            if (findBillHistory.editor_type == 'USER') {
                var editor_user = yield this.exec(models_1.User.findOne({ where: { id: findBillHistory.editor } }), { allowNull: false });
            }
            if (findBillHistory.editor_type == 'EMPLOYEE') {
                var editor_employee = yield this.exec(models_1.Employee.findOne({ where: { id: findBillHistory.editor } }), { allowNull: false });
            }
            while (true) {
                try {
                    findBillHistory = yield this.exec(models_1.Bill.findOne({ where: { updated_id: findBillHistory.id } }), { allowNull: false });
                    object.push(findBillHistory);
                }
                catch (e) {
                    break;
                }
            }
            const current_bill = { bill, editor: editor_user || editor_employee };
            return { current_bill, history: object };
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
    bulkCreateBillItem(params, bill_id) {
        return __awaiter(this, void 0, void 0, function* () {
            const { items } = params;
            const bulk_items = [];
            let total_price = 0;
            for (const item of items) {
                const product = yield models_1.Product.findOne({
                    where: {
                        id: item.product_id
                    }
                });
                if (!product)
                    throw services_1.errorService.database.recordNotFound("Product not found " + item.product_id);
                total_price += item.amount * product.price;
                bulk_items.push({
                    product_id: item.product_id,
                    amount: item.amount,
                    price: product.price,
                    bill_id
                });
            }
            return {
                total_price: total_price,
                bulk_items: bulk_items
            };
        });
    }
    createOrder(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { items } = params;
            const t = yield models_1.sequelize.transaction();
            try {
                let bill = yield this.exec(models_1.Bill.create(params, {
                    transaction: t
                }));
                const { bulk_items, total_price } = yield this.bulkCreateBillItem({
                    items: items
                }, bill.id);
                const bill_items = yield this.exec(models_1.BillItem.bulkCreate(bulk_items, {
                    transaction: t
                }));
                const bill_activity = yield this.exec(models_1.BillActivity.create({
                    action: 'ORDERED',
                    bill_id: bill.id
                }, {
                    transaction: t
                }));
                const paid_history = yield this.exec(models_1.PaidHistory.create({
                    bill_id: bill.id,
                    remain_amount: total_price
                }, {
                    transaction: t
                }));
                bill = yield bill.update({
                    current_paid_history_id: paid_history.id,
                    current_bill_activity_id: bill_activity.id,
                    total_price: total_price
                }, {
                    transaction: t
                });
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
        });
    }
    getBill(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.exec(models_1.Bill.findOne({
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
                        [models_1.sequelize.where(models_1.sequelize.col('buyer_id'), option.user_id), 'is_buy']
                    ]
                }
            }));
        });
    }
    changeBillActivity(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const { bill_id, action } = params;
            const t = yield models_1.sequelize.transaction();
            try {
                const bill_activity = yield this.exec(models_1.BillActivity.create({
                    bill_id,
                    action
                }, {
                    transaction: t
                }));
                yield this.exec(models_1.Bill.update({
                    current_bill_activity_id: bill_activity.id
                }, {
                    where: {
                        id: bill_id
                    },
                    transaction: t
                }));
                t.commit();
                return bill_activity;
            }
            catch (e) {
                t.rollback();
                throw e;
            }
        });
    }
}
exports.BillService = BillService;
//# sourceMappingURL=billService.js.map