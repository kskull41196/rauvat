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
const crudService_pg_1 = require("../crudService.pg");
const tables_1 = require("@/models/tables");
const models_1 = require("@/models");
const services_1 = require("@/services");
class EmployeeService extends crudService_pg_1.CrudService {
    constructor() {
        super(tables_1.Employee);
    }
    createAccount(params) {
        return __awaiter(this, void 0, void 0, function* () {
            const t = yield models_1.sequelize.transaction();
            let { email, password, fullname, avatar, phone } = params;
            try {
                let employee = yield this.exec(tables_1.Employee.create(params, {
                    transaction: t
                }));
                let user = yield services_1.firebaseService.createUser({
                    email,
                    password
                });
                t.commit();
                return {
                    employee,
                    user
                };
            }
            catch (err) {
                t.rollback();
                if (err.code && err.message)
                    throw services_1.errorService.firebase.cannotCreateAccount(err);
                throw err;
            }
        });
    }
}
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employeeService.js.map