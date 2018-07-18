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
const baseController_1 = require("./baseController");
const services_1 = require("@/services");
const config_1 = require("@/config");
const guid = require("guid");
const dateFormat = require("dateformat");
const querystring = require("qs");
class VnpayController extends baseController_1.BaseController {
    constructor() {
        super();
    }
    createPaymentBillUrl(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let { bill_id } = params;
            let bill = yield services_1.billService.getItem({
                filter: {
                    id: bill_id
                }
            });
            if (!bill)
                throw services_1.errorService.database.recordNotFound("Bill not found");
            params.amount = bill.total_price;
            let tmnCode = config_1.config.vnpay.tmnCode;
            let secretKey = config_1.config.vnpay.hashSecret;
            let vnpUrl = config_1.config.vnpay.url;
            let payReturnUrl = config_1.config.vnpay.payReturnUrl;
            let vnp_Params = {};
            let session_id = guid.raw();
            vnp_Params['vnp_Version'] = '2';
            vnp_Params['vnp_Command'] = 'pay';
            vnp_Params['vnp_TmnCode'] = tmnCode;
            vnp_Params['vnp_Locale'] = 'vn';
            vnp_Params['vnp_CurrCode'] = 'VND';
            vnp_Params['vnp_TxnRef'] = session_id;
            vnp_Params['vnp_OrderInfo'] = JSON.stringify({
                type: 'bill',
                bill_id
            });
            vnp_Params['vnp_OrderType'] = 'topup';
            vnp_Params['vnp_BankCode'] = "NCB";
            vnp_Params['vnp_Amount'] = params.amount * 100;
            vnp_Params['vnp_ReturnUrl'] = payReturnUrl;
            vnp_Params['vnp_IpAddr'] = params.ipAddr;
            vnp_Params['vnp_CreateDate'] = dateFormat(new Date(), 'yyyymmddHHmmss');
            vnp_Params = services_1.utilService.sortObject(vnp_Params);
            let secureHash = services_1.utilService.secureHash(vnp_Params, secretKey);
            vnp_Params['vnp_SecureHash'] = secureHash;
            vnp_Params['vnp_SecureHashType'] = 'MD5';
            vnpUrl += '?' + querystring.stringify(vnp_Params, { encode: true });
            services_1.vnpayHistoryService.create({
                session_id,
                amount: params.amount
            });
            return {
                url: vnpUrl
            };
        });
    }
    ipn(params) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let secureHash = params['vnp_SecureHash'];
                delete params['vnp_SecureHash'];
                delete params['vnp_SecureHashType'];
                //params = this.sortObject(params);
                let tmnCode = config_1.config.vnpay.tmnCode;
                let secretKey = config_1.config.vnpay.hashSecret;
                let checkSum = services_1.utilService.secureHash(params, secretKey);
                if (secureHash === checkSum) {
                    //Kiem tra xem du lieu trong db co hop le hay khong va thong bao ket qua
                    let data = JSON.parse(params['vnp_OrderInfo']);
                    let session_id = params['vnp_TxnRef'];
                    //return data;
                    let { type, bill_id } = data;
                    let amount = parseFloat(params["vnp_Amount"]);
                    amount /= 100;
                    if (params['vnp_ResponseCode'] === '00') {
                        if (type === 'bill') {
                            let vnpay_history = yield services_1.vnpayHistoryService.getItem({
                                session_id: session_id
                            });
                            if (vnpay_history) {
                                let bill = yield services_1.billService.getItem({
                                    filter: {
                                        id: bill_id
                                    },
                                    include: [
                                        {
                                            association: 'paid_history',
                                            where: {
                                                type: 'PARTIAL',
                                                remain_amount: {
                                                    $ne: 0
                                                }
                                            }
                                        }
                                    ]
                                });
                                if (!bill)
                                    return {
                                        RspCode: "02",
                                        Message: "Order already confirmed"
                                    };
                                else {
                                    //return bill;
                                    let remain = bill.paid_history.remain_amount;
                                    let paid_history = yield services_1.paidHistoryService.create({
                                        bill_id: bill_id,
                                        payment_method: 'ONLINE',
                                        pay_amount: amount,
                                        type: remain - amount === 0 ? 'FULL' : 'PARTIAL',
                                        remain_amount: remain - amount,
                                        vnpay_history_id: vnpay_history.id
                                    });
                                    yield services_1.billService.changeBillActivity({
                                        action: 'SUCCESSED',
                                        bill_id: bill_id
                                    });
                                    yield services_1.billService.update({
                                        current_paid_history_id: paid_history.id
                                    }, {
                                        filter: {
                                            id: bill_id
                                        }
                                    });
                                    return {
                                        RspCode: "00",
                                        Message: "Confirm Success"
                                    };
                                }
                            }
                            else {
                                return {
                                    RspCode: "01",
                                    Message: "Order not found"
                                };
                            }
                        }
                        else {
                            return {
                                RspCode: "99"
                            };
                        }
                    }
                    // Cập nhật thanh toán lỗi và trả về
                    else {
                        // Update payment error
                        if (type === 'bill') {
                            let vnpay_history = yield services_1.vnpayHistoryService.getItem({
                                session_id: session_id
                            });
                            if (!vnpay_history) {
                                return {
                                    RspCode: "01",
                                    Message: "Order not found"
                                };
                            }
                        }
                        return {
                            RspCode: "00",
                            Message: "Confirm Success"
                        };
                    }
                }
                else {
                    return {
                        RspCode: "97",
                        Message: "Invalid signature"
                    };
                }
            }
            catch (e) {
                console.log(e);
                return {
                    RspCode: "99"
                };
            }
        });
    }
}
exports.VnpayController = VnpayController;
//# sourceMappingURL=vnpayController.js.map