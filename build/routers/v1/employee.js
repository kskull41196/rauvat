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
class EmployeeRouter extends crud_1.CrudRouter {
    constructor() {
        super(controllers_1.employeeController);
    }
    customRouting() {
        this.router.post('/create_account', this.route(this.createAccount));
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
        return [middlewares_1.blockMiddleware.run()];
    }
    deleteAllMiddlewares() {
        return [middlewares_1.blockMiddleware.run()];
    }
    createMiddlewares() {
        return [middlewares_1.blockMiddleware.run()];
    }
    createAccount(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateJSON(req.body, {
                type: 'object',
                properties: {
                    email: {
                        type: 'string'
                    },
                    password: {
                        type: 'string'
                    },
                    fullname: {
                        type: 'string'
                    },
                    avatar: {
                        type: 'string'
                    },
                    phone: {
                        type: 'string'
                    }
                },
                required: ['email', 'password', 'fullname', 'phone']
            });
            const result = yield this.controller.createAccount(req.body);
            this.onSuccess(res, result);
        });
    }
}
exports.default = EmployeeRouter;
//# sourceMappingURL=employee.js.map