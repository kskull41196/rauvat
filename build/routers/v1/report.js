"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crud_1 = require("../crud");
const controllers_1 = require("@/controllers");
const middlewares_1 = require("@/middlewares");
class ReportRouter extends crud_1.CrudRouter {
    constructor() {
        super(controllers_1.reportController);
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
        return [middlewares_1.authInfoMiddleware.run()];
    }
    deleteAllMiddlewares() {
        return [middlewares_1.authInfoMiddleware.run()];
    }
    createMiddlewares() {
        return [middlewares_1.authInfoMiddleware.run()];
    }
}
exports.default = ReportRouter;
//# sourceMappingURL=report.js.map