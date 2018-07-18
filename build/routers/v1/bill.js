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
const crud_1 = require("../crud");
const controllers_1 = require("@/controllers");
const middlewares_1 = require("@/middlewares");
class BillRouter extends crud_1.CrudRouter {
    constructor() {
        super(controllers_1.billController);
    }
    customRouting() {
        this.router.post('/order', this.createOrderMiddlewares(), this.route(this.createOrder));
        this.router.get('/:id/activities', this.getBillActivitiesMiddlewares(), this.route(this.getBillActivities));
        this.router.get('/:id/items', this.getBillItemsMiddlewares(), this.route(this.getBillItems));
        this.router.post('/:bill_id/ordered', this.changeOrderedStatusMiddlewares(), this.route(this.changeOrderedStatus));
        this.router.post('/:bill_id/successed', this.changeSuccessedStatusMiddlewares(), this.route(this.changeSuccessedStatus));
        this.router.post('/:bill_id/failed', this.changeFailedStatusMiddlewares(), this.route(this.changeFailedStatus));
        this.router.get('/get_bill_with_history/:id', this.route(this.getBillWithHistory));
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            req.body.editor = req.tokenInfo.payload.employee_id || req.tokenInfo.payload.user_id;
            req.body.editor_role = req.tokenInfo.role;
            const result = yield this.controller.update(req.body, {
                filter: { id }
            });
            this.onSuccess(res, result);
        });
    }
    getBillWithHistory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield this.controller.getBillWithHistory(req.body, {
                filter: { id }
            });
            this.onSuccess(res, result);
        });
    }
    createOrderMiddlewares() {
        return [
            middlewares_1.authInfoMiddleware.run()
        ];
    }
    createOrder(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body = Object.assign(req.body, req.tokenInfo.payload);
            yield this.validateJSON(req.body, {
                type: 'object',
                properties: {
                    seller_id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    user_id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    address: {
                        type: 'string'
                    },
                    longitude: {
                        type: 'number',
                        minimum: 0
                    },
                    lattitude: {
                        type: 'number',
                        minimum: 0
                    },
                    note: {
                        type: 'string'
                    },
                    items: {
                        type: 'array',
                        items: {
                            type: 'object',
                            properties: {
                                product_id: {
                                    type: 'string',
                                    format: 'uuid'
                                },
                                amount: {
                                    type: 'integer',
                                    minimum: 1
                                }
                            },
                            required: ['product_id', 'amount']
                        },
                        minItems: 1
                    }
                },
                required: ['seller_id', 'user_id', 'address', 'longitude', 'lattitude', 'items']
            });
            const result = yield this.controller.createOrder(req.body);
            this.onSuccess(res, result);
        });
    }
    getItemMiddlewares() {
        return [
            middlewares_1.authInfoMiddleware.run()
        ];
    }
    getItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.params.user_id = req.tokenInfo.payload.user_id;
            yield this.validateJSON(req.params, {
                type: 'object',
                properties: {
                    user_id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    id: {
                        type: 'string',
                        format: 'uuid'
                    }
                },
                required: ['user_id', 'id']
            });
            const result = yield this.controller.getBillItems(req.params);
            this.onSuccess(res, result);
        });
    }
    changeOrderedStatusMiddlewares() {
        return [
            middlewares_1.authInfoMiddleware.run()
        ];
    }
    changeOrderedStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.params.user_id = req.tokenInfo.payload.user_id;
            yield this.validateJSON(req.params, {
                type: 'object',
                properties: {
                    bill_id: {
                        type: 'string',
                        format: 'uuid'
                    }
                },
                required: ['bill_id']
            });
            const result = yield this.controller.changeOrderedStatus(req.params);
            this.onSuccess(res, result);
        });
    }
    changeSuccessedStatusMiddlewares() {
        return [
            middlewares_1.authInfoMiddleware.run()
        ];
    }
    changeSuccessedStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.params.user_id = req.tokenInfo.payload.user_id;
            yield this.validateJSON(req.params, {
                type: 'object',
                properties: {
                    bill_id: {
                        type: 'string',
                        format: 'uuid'
                    }
                },
                required: ['bill_id']
            });
            const result = yield this.controller.changeSuccessedStatus(req.params);
            this.onSuccess(res, result);
        });
    }
    changeFailedStatusMiddlewares() {
        return [
            middlewares_1.authInfoMiddleware.run()
        ];
    }
    changeFailedStatus(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.params.user_id = req.tokenInfo.payload.user_id;
            yield this.validateJSON(req.params, {
                type: 'object',
                properties: {
                    bill_id: {
                        type: 'string',
                        format: 'uuid'
                    }
                },
                required: ['bill_id']
            });
            const result = yield this.controller.changeFailedStatus(req.params);
            this.onSuccess(res, result);
        });
    }
    getBillItemsMiddlewares() {
        return [
            middlewares_1.authInfoMiddleware.run()
        ];
    }
    getBillItems(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.params.user_id = req.tokenInfo.payload.user_id;
            yield this.validateJSON(req.params, {
                type: 'object',
                properties: {
                    user_id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    id: {
                        type: 'string',
                        format: 'uuid'
                    }
                },
                required: ['user_id', 'id']
            });
            const result = yield this.controller.getBillItems(req.params);
            this.onSuccess(res, result);
        });
    }
    getBillActivitiesMiddlewares() {
        return [
            middlewares_1.authInfoMiddleware.run()
        ];
    }
    getBillActivities(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.params.user_id = req.tokenInfo.payload.user_id;
            yield this.validateJSON(req.params, {
                type: 'object',
                properties: {
                    user_id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    id: {
                        type: 'string',
                        format: 'uuid'
                    }
                },
                required: ['user_id', 'id']
            });
            const result = yield this.controller.getBillActivities(req.params);
            this.onSuccess(res, result);
        });
    }
}
exports.default = BillRouter;
//# sourceMappingURL=bill.js.map