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
class GlobalCategoryRouter extends crud_1.CrudRouter {
    constructor() {
        super(controllers_1.globalCategoryController);
    }
    customRouting() {
        this.router.post('/:category_id/attributes', this.addAttributesMiddlewares(), this.route(this.addAttributes));
        this.router.delete('/:category_id/attribute/:attribute_id', this.deleteAttributesMiddlewares(), this.route(this.deleteAttributes));
    }
    addAttributesMiddlewares() {
        return [
            middlewares_1.authInfoMiddleware.run()
        ];
    }
    addAttributes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.body = Object.assign(req.body, req.params);
            yield this.validateJSON(req.body, {
                type: 'object',
                properties: {
                    attribute: {
                        enum: ['STRING', 'NUMBER', 'BOOLEAN', 'JSON', 'TIMESTAMP']
                    },
                    name: {
                        type: 'string'
                    },
                    value: {
                        type: 'string'
                    },
                    category_id: {
                        type: 'string',
                        format: 'uuid'
                    }
                },
                required: ['attribute', 'name', 'value', 'category_id']
            });
            const result = yield this.controller.addAttributes(req.body);
            this.onSuccess(res, result);
        });
    }
    deleteAttributesMiddlewares() {
        return [
            middlewares_1.authInfoMiddleware.run()
        ];
    }
    deleteAttributes(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateJSON(req.params, {
                type: 'object',
                properties: {
                    category_id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    attribute_id: {
                        type: 'string',
                        format: 'uuid'
                    }
                },
                required: ['category_id', 'attribute_id']
            });
            const result = yield this.controller.deleteAttributes(req.params);
            this.onSuccess(res, result);
        });
    }
}
exports.default = GlobalCategoryRouter;
//# sourceMappingURL=global_category.js.map