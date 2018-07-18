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
class WalletRouter extends crud_1.CrudRouter {
    constructor() {
        super(controllers_1.walletController);
    }
    customRouting() {
        this.router.post('/export/:id', this.exportMiddlewares(), this.route(this.export));
        this.router.post('/import/:id', this.importMiddlewares(), this.route(this.import));
    }
    export(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            req.body.employee_id = req.tokenInfo.payload.employee_id;
            const result = yield this.controller.export(req.body, {
                filter: { id }
            });
            this.onSuccess(res, result);
        });
    }
    ;
    import(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            req.body.employee_id = req.tokenInfo.payload.employee_id;
            const result = yield this.controller.import(req.body, {
                filter: { id }
            });
            this.onSuccess(res, result);
        });
    }
    ;
    exportMiddlewares() {
        return [middlewares_1.authInfoMiddleware.run(), middlewares_1.adminAuthInfoMiddleware.run()];
    }
    importMiddlewares() {
        return [middlewares_1.authInfoMiddleware.run(), middlewares_1.adminAuthInfoMiddleware.run()];
    }
    getListMiddlewares() {
        return [middlewares_1.queryMiddleware.run()];
    }
    getItemMiddlewares() {
        return [middlewares_1.queryMiddleware.run()];
    }
    updateMiddlewares() {
        return [middlewares_1.blockMiddleware.run()];
    }
    deleteMiddlewares() {
        return [middlewares_1.blockMiddleware.run()];
    }
    deleteAllMiddlewares() {
        return [middlewares_1.blockMiddleware.run()];
    }
    createMiddlewares() {
        return [middlewares_1.blockMiddleware.run()];
    }
}
exports.default = WalletRouter;
//# sourceMappingURL=wallet.js.map