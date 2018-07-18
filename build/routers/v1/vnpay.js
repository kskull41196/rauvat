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
const express = require("express");
const base_1 = require("../base");
const controllers_1 = require("@/controllers");
class AuthRouter extends base_1.BaseRouter {
    constructor() {
        super();
        this.router = express.Router();
        this.router.post('/create_payment_bill_url', this.createPaymentBillUrlMiddlewares(), this.route(this.createPaymentBillUrl));
        this.router.get('/ipn', this.route(this.ipn));
        this.controller = controllers_1.vnpayController;
    }
    createPaymentBillUrlMiddlewares() {
        return [];
    }
    createPaymentBillUrl(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateJSON(req.body, {
                type: 'object',
                properties: {
                    bank_code: {
                        type: 'string'
                    },
                    bill_id: {
                        type: 'string',
                        format: 'uuid'
                    }
                },
                required: ['bill_id']
            });
            let ipAddr = req.headers['x-forwarded-for'] ||
                req.connection.remoteAddress ||
                req.socket.remoteAddress;
            req.body.ipAddr = ipAddr;
            const result = yield this.controller.createPaymentBillUrl(req.body);
            this.onSuccess(res, result);
        });
    }
    ipn(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            res.item = yield this.controller.ipn(req.query);
            res.status(200).json(res.item);
        });
    }
}
exports.default = AuthRouter;
//# sourceMappingURL=vnpay.js.map