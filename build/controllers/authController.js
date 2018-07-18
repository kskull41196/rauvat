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
const baseController_1 = require("./baseController");
const services_1 = require("@/services");
class AuthController extends baseController_1.BaseController {
    constructor() {
        super();
    }
    login(params) {
        return __awaiter(this, void 0, void 0, function* () {
            // Tra ve token
            const token = yield services_1.tokenService.getAdminToken();
            return {
                accessToken: token
            };
        });
    }
    employeeLogin(id_token) {
        return __awaiter(this, void 0, void 0, function* () {
            const user = yield services_1.firebaseService.verifyIdToken(id_token);
            if (user.email_verified) {
                const employee = yield services_1.employeeService.getItem({
                    filter: {
                        email: user.email
                    }
                });
                employee.dataValues.role = "admin";
                employee.dataValues.access_token = yield services_1.tokenService.getEmployeeToken(employee.id);
                return employee;
            }
            else
                throw services_1.errorService.auth.emailNotVerified();
        });
    }
}
exports.AuthController = AuthController;
//# sourceMappingURL=authController.js.map