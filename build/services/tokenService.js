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
const config_1 = require("@/config");
const moment = require("moment");
const jwt = require("jwt-simple");
class TokenService {
    constructor() {
    }
    generateToken(payload, role, option = {
        exp: moment().add(2, "months")
    }) {
        return __awaiter(this, void 0, void 0, function* () {
            const secret = option.secret || config_1.config.server.secret;
            return jwt.encode({
                payload: payload,
                role: role,
                exp: option.exp
            }, secret);
        });
    }
    decodeToken(token, option) {
        return __awaiter(this, void 0, void 0, function* () {
            let result = undefined;
            try {
                const secret = (option && option.secret) || config_1.config.server.secret;
                result = jwt.decode(token, secret);
            }
            catch (err) {
                throw services_1.errorService.auth.badToken();
            }
            if (result) {
                if ((new Date(result.exp)).getTime() <= (Date.now() / 1000)) {
                    throw services_1.errorService.auth.tokenExpired();
                }
                return result;
            }
            else {
                throw services_1.errorService.auth.badToken();
            }
        });
    }
    getAdminToken(secret = "") {
        return __awaiter(this, void 0, void 0, function* () {
            secret = secret + config_1.config.server.secret;
            return yield this.generateToken({}, "admin", {
                exp: moment().add(1, 'days'),
                secret
            });
        });
    }
    getWriteToken(secret = "") {
        return __awaiter(this, void 0, void 0, function* () {
            secret = secret + config_1.config.server.secret;
            return yield this.generateToken({}, "write", {
                exp: moment().add(1, 'days'),
                secret
            });
        });
    }
    getReadToken(secret = "") {
        return __awaiter(this, void 0, void 0, function* () {
            secret = secret + config_1.config.server.secret;
            return yield this.generateToken({}, "read", {
                exp: moment().add(1, 'days'),
                secret
            });
        });
    }
    getUserToken(user_id, secret = "") {
        return __awaiter(this, void 0, void 0, function* () {
            secret = secret + config_1.config.server.secret;
            let user = yield services_1.userService.getItem({
                filter: {
                    id: user_id
                }
            });
            return yield this.generateToken({
                user_id,
                role: user.user_type
            }, user.user_type, {
                exp: moment().add(7, 'days'),
                secret
            });
        });
    }
    getEmployeeToken(employee_id, secret = "") {
        return __awaiter(this, void 0, void 0, function* () {
            secret = secret + config_1.config.server.secret;
            return yield this.generateToken({
                employee_id,
                role: 'ADMIN'
            }, 'ADMIN', {
                exp: moment().add(1, 'days'),
                secret
            });
        });
    }
}
exports.TokenService = TokenService;
//# sourceMappingURL=tokenService.js.map