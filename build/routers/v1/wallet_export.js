"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crud_1 = require("../crud");
const controllers_1 = require("@/controllers");
const middlewares_1 = require("@/middlewares");
class Wallet_exportRouter extends crud_1.CrudRouter {
    constructor() {
        super(controllers_1.walletExportController);
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
exports.default = Wallet_exportRouter;
//# sourceMappingURL=wallet_export.js.map