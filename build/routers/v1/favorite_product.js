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
class FavoriteProductRouter extends crud_1.CrudRouter {
    constructor() {
        super(controllers_1.favoriteProductController);
    }
    customRouting() {
        this.router.post('/add', this.createMiddlewares(), this.route(this.addFavoriteProduct));
        this.router.delete('/remove', this.deleteMiddlewares(), this.route(this.removeFavoriteProduct));
    }
    addFavoriteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.controller.addFavoriteProduct(req.body);
            this.onSuccess(res, result);
        });
    }
    removeFavoriteProduct(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.controller.removeFavoriteProduct(req.body);
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
        return [middlewares_1.authInfoMiddleware.run()];
    }
    deleteAllMiddlewares() {
        return [middlewares_1.blockMiddleware.run()];
    }
    createMiddlewares() {
        return [middlewares_1.authInfoMiddleware.run()];
    }
}
exports.default = FavoriteProductRouter;
//# sourceMappingURL=favorite_product.js.map