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
const services_1 = require("@/services");
class BaseMiddleware {
    onError(res, error) {
        if (!error.options) {
            console.log("UNKNOW ERROR", error);
            const err = services_1.errorService.router.somethingWentWrong();
            res.status(err.options.code).json(err.options);
        }
        else {
            res.status(error.options.code).json(error.options);
        }
    }
    run(option) {
        return (req, res, next) => this.use
            .bind(this)(req, res, next, option)
            .catch((error) => {
            this.onError(res, error);
        });
    }
    use(req, res, next, option) {
        return __awaiter(this, void 0, void 0, function* () {
            next();
        });
    }
}
exports.BaseMiddleware = BaseMiddleware;
//# sourceMappingURL=base.js.map