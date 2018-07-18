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
class GlobalAreaRouter extends crud_1.CrudRouter {
    constructor() {
        super(controllers_1.globalAreaController);
    }
    customRouting() {
        this.router.get('/get_item_with_parents/:id', this.route(this.getItemWithParents));
    }
    getItemWithParents(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield this.controller.getItemWithParents(req.body, {
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
        return [];
    }
    deleteAllMiddlewares() {
        return [middlewares_1.blockMiddleware.run()];
    }
    createMiddlewares() {
        return [];
    }
}
exports.default = GlobalAreaRouter;
//# sourceMappingURL=global_area.js.map