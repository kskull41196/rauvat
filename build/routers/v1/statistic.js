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
const middlewares_1 = require("@/middlewares");
class AuthRouter extends base_1.BaseRouter {
    constructor() {
        super();
        this.router = express.Router();
        this.router.post('/general', this.statisticMiddlewares(), this.route(this.statisticGeneral));
        this.router.post('/trading', this.statisticMiddlewares(), this.route(this.statisticTrading));
    }
    statisticGeneral(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield controllers_1.globalPromotionController.statisticGeneral(req.body);
            this.onSuccess(res, result);
        });
    }
    statisticTrading(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield controllers_1.storeController.statisticTrading(req.body);
            this.onSuccess(res, result);
        });
    }
    statisticMiddlewares() {
        return [middlewares_1.authInfoMiddleware.run(), middlewares_1.adminAuthInfoMiddleware.run()];
    }
}
exports.default = AuthRouter;
//# sourceMappingURL=statistic.js.map