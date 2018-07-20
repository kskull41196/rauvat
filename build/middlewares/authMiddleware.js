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
const base_1 = require("./base");
const services_1 = require("@/services");
const HEADERS = 'authorization';
class AuthInfoMiddleware extends base_1.BaseMiddleware {
    use(req, res, next, providers = []) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.headers[HEADERS] !== 'undefined') {
                const bearerHeader = req.headers[HEADERS].toString();
                const bearer = bearerHeader.split(' ');
                const bearerToken = bearer[1];
                const result = yield services_1.tokenService.decodeToken(bearerToken);
                req.tokenInfo = result;
                next();
            }
            else {
                throw services_1.errorService.auth.unauthorized();
            }
        });
    }
}
exports.AuthInfoMiddleware = AuthInfoMiddleware;
//# sourceMappingURL=authMiddleware.js.map