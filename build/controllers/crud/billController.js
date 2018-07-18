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
const crudController_1 = require("../crudController");
const services_1 = require("@/services");
const const_1 = require("@/const");
class BillController extends crudController_1.CrudController {
    constructor() {
        super(services_1.billService);
    }
    getBillWithHistory(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getBillWithHistory(params, option);
        });
    }
    createOrder(params) {
        return __awaiter(this, void 0, void 0, function* () {
            params.buyer_id = params.user_id;
            return yield this.service.createOrder(params);
        });
    }
    getBill(option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getBill(option);
        });
    }
    getBillActivities(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield services_1.billActivityService.getList({
                filter: {
                    bill_id: params.id
                },
                include: [
                    {
                        association: 'bill',
                        where: {
                            $or: [
                                {
                                    seller_id: params.user_id
                                }, {
                                    buyer_id: params.user_id
                                }
                            ]
                        },
                        attributes: []
                    }
                ]
            });
        });
    }
    getBillItems(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield services_1.billItemService.getList({
                filter: {
                    bill_id: params.id
                },
                include: [
                    {
                        association: 'bill',
                        where: {
                            $or: [
                                {
                                    seller_id: params.user_id
                                }, {
                                    buyer_id: params.user_id
                                }
                            ]
                        },
                        attributes: []
                    },
                    {
                        association: 'product'
                    }
                ]
            });
        });
    }
    changeOrderedStatus(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let { bill_id, user_id } = params;
            let action = const_1.CONST.ORDERED;
            return yield this.service.changeBillActivity({
                bill_id,
                action
            });
        });
    }
    changeSuccessedStatus(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let { bill_id, user_id } = params;
            let action = const_1.CONST.SUCCESSED;
            return yield this.service.changeBillActivity({
                bill_id,
                action
            });
        });
    }
    changeFailedStatus(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let { bill_id, user_id } = params;
            let action = const_1.CONST.FAILED;
            return yield this.service.changeBillActivity({
                bill_id,
                action
            });
        });
    }
}
exports.BillController = BillController;
//# sourceMappingURL=billController.js.map