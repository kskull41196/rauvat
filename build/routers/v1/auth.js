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
const express = require("express");
const base_1 = require("../base");
const controllers_1 = require("@/controllers");
const middlewares_1 = require("@/middlewares");
const crypto = require("crypto");
const CONVERT_MD5 = 'md5';
const ENCODING = 'hex';
const TWO_MONTHS_IN_SECONDS = 2 * 30 * 24 * 60 * 60;
class AuthRouter extends base_1.BaseRouter {
    constructor() {
        super();
        this.router = express.Router();
        this.router.post('/login', this.route(this.login));
        this.router.post('/register/', this.route(this.registerUser));
        this.router.put('/forgetpass/', this.route(this.getPassword));
        this.router.get('/gettoken', this.route(this.getToken));
        this.router.post('/employee_login', this.route(this.employeeLogin));
        this.router.post('/test', this.testMiddlewares());
    }
    testMiddlewares() {
        return [
            middlewares_1.authInfoMiddleware.run()
        ];
    }
    getToken(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield services_1.tokenService.generateToken({}, "admin");
            this.onSuccess(res, "admin", { token });
        });
    }
    getPassword(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const md5Password = crypto.createHash(CONVERT_MD5).update(req.body.password).digest(ENCODING);
            req.body.password = md5Password;
            const result = yield controllers_1.userController.getPassword(req.body);
            this.onSuccess(res, result);
        });
    }
    registerUser(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (req.body.fullname == undefined) {
                req.body.fullname = "";
            }
            if (req.body.sex == undefined) {
                req.body.sex = "Other";
            }
            if (req.body.birthday == undefined) {
                req.body.birthday = new Date();
            }
            if (req.body.address == undefined) {
                req.body.address = "";
            }
            if (req.body.email == undefined) {
                req.body.email = "";
            }
            const result = yield controllers_1.userController.create(req.body);
            this.onSuccess(res, result);
        });
    }
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const md5_password = crypto.createHash(CONVERT_MD5).update(req.body.password).digest('hex');
            req.body.password = md5_password;
            const dataObtained = yield controllers_1.userController.checkLogin(req.body);
            dataObtained.dataValues.role = "USER";
            // var token = await tokenService.createJwtToken(dataObtained);
            const token = yield services_1.tokenService.getUserToken(dataObtained.id);
            this.onSuccess(res, dataObtained, { token });
        });
    }
    employeeLogin(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateJSON(req.body, {
                type: 'object',
                properties: {
                    id_token: {
                        type: 'string'
                    }
                },
                required: ['id_token']
            });
            const bearer = req.body.id_token.split(' ');
            const bearerToken = bearer[1];
            const result = yield controllers_1.authController.employeeLogin(bearerToken);
            this.onSuccess(res, result);
        });
    }
}
exports.default = AuthRouter;
//# sourceMappingURL=auth.js.map