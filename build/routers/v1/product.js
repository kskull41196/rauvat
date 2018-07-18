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
class ProductRouter extends crud_1.CrudRouter {
    constructor() {
        super(controllers_1.productController);
    }
    customRouting() {
        this.router.post('/filter', this.filterMiddlewares(), this.route(this.filter));
        this.router.post('/post_product', this.postProductMiddlewares(), this.route(this.postProduct));
        this.router.post('/post_quick_product', this.postQuickProductMiddlewares(), this.route(this.postQuickProduct));
        this.router.get('/get_product_with_history/:id', this.route(this.getProductWithHistory));
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
    getProductWithHistory(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield this.controller.getProductWithHistory(req.body, {
                filter: { id }
            });
            this.onSuccess(res, result);
        });
    }
    getListMiddlewares() {
        return [middlewares_1.queryMiddleware.run()];
    }
    getItemMiddlewares() {
        return [middlewares_1.queryMiddleware.run()];
    }
    updateMiddlewares() {
        return [middlewares_1.authInfoMiddleware.run()];
    }
    deleteMiddlewares() {
        return [middlewares_1.authInfoMiddleware.run(), middlewares_1.adminAuthInfoMiddleware.run()];
    }
    deleteAllMiddlewares() {
        return [middlewares_1.authInfoMiddleware.run(), middlewares_1.adminAuthInfoMiddleware.run()];
    }
    createMiddlewares() {
        return [];
        //for testing purpose, it should be queryMiddleware
    }
    filterMiddlewares() {
        return [
            middlewares_1.queryMiddleware.run()
        ];
    }
    filter(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateJSON(req.body, {
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    global_category_id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    area_id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    is_quick_post: {
                        type: 'boolean'
                    },
                    trade_type: {
                        type: 'string'
                    },
                    point: {
                        type: 'object',
                        properties: {
                            longitude: {
                                type: 'number'
                            },
                            latitude: {
                                type: 'number'
                            }
                        },
                        required: ['longitude', 'latitude']
                    },
                    radius: {
                        type: 'number'
                    }
                }
            });
            const result = yield this.controller.filter(req.body, req.queryInfo);
            this.onSuccessAsList(res, result, undefined, req.queryInfo);
        });
    }
    postProductMiddlewares() {
        return [
            middlewares_1.authInfoMiddleware.run()
        ];
    }
    postProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.user_id = req.tokenInfo.payload.user_id;
            yield this.validateJSON(req.body, {
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    price: {
                        type: 'number'
                    },
                    user_id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    short_description: {
                        type: 'string'
                    },
                    description: {
                        type: 'string'
                    },
                    global_category_id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    global_area_id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    thumb: {
                        type: 'string',
                        format: 'url'
                    },
                    list_image: {
                        type: 'array',
                        items: {
                            type: 'string'
                        }
                    },
                    is_from_store: {
                        type: 'boolean'
                    },
                    address: {
                        type: 'string'
                    },
                    longitude: {
                        type: 'number',
                        minimum: 0
                    },
                    lattiude: {
                        type: 'number',
                        minimum: 0
                    },
                    duration: {
                        type: 'number',
                        minimum: 0
                    },
                    is_limit_duration: {
                        type: 'boolean'
                    },
                    is_buy: {
                        type: 'boolean'
                    },
                    attribute: {
                        type: 'object'
                    }
                },
                required: ['name', 'price', 'description', 'global_category_id', 'thumb', 'is_from_store', 'attribute', 'global_area_id', 'address', 'longitude', 'latitude', 'duration', 'is_limit_duration', 'is_buy']
            });
            const result = yield this.controller.postProduct(req.body);
            this.onSuccess(res, result);
        });
    }
    postQuickProductMiddlewares() {
        return [
            middlewares_1.authInfoMiddleware.run()
        ];
    }
    postQuickProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body.user_id = req.tokenInfo.payload.user_id;
            yield this.validateJSON(req.body, {
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    price: {
                        type: 'number'
                    },
                    user_id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    short_description: {
                        type: 'string'
                    },
                    description: {
                        type: 'string'
                    },
                    global_category_id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    global_area_id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    thumb: {
                        type: 'string',
                        format: 'url'
                    },
                    list_image: {
                        type: 'array',
                        items: {
                            type: 'string'
                        }
                    },
                    is_from_store: {
                        type: 'boolean'
                    },
                    address: {
                        type: 'string'
                    },
                    longitude: {
                        type: 'number',
                        minimum: 0
                    },
                    lattiude: {
                        type: 'number',
                        minimum: 0
                    },
                    duration: {
                        type: 'number',
                        minimum: 0
                    },
                    is_limit_duration: {
                        type: 'boolean'
                    },
                    is_buy: {
                        type: 'boolean'
                    },
                    attribute: {
                        type: 'object'
                    }
                },
                required: ['name', 'price', 'description', 'global_category_id', 'thumb', 'is_from_store', 'attribute', 'global_area_id', 'address', 'longitude', 'latitude', 'duration', 'is_limit_duration', 'is_buy']
            });
            const result = yield this.controller.postQuickProduct(req.body);
            this.onSuccess(res, result);
        });
    }
}
exports.default = ProductRouter;
//# sourceMappingURL=product.js.map