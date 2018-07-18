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
const _ = require("lodash");
class UserRouter extends crud_1.CrudRouter {
    constructor() {
        super(controllers_1.userController);
    }
    customRouting() {
        this.router.post('/check_username', this.route(this.checkUsername));
        this.router.get('/bills', this.getBillsMiddlewares(), this.route(this.getBills));
        this.router.post('/upgrade', this.upgradeMiddlewares(), this.route(this.upgrade));
        this.router.post('/downgrade', this.downgradeMiddlewares(), this.route(this.downgrade));
        this.router.put('/update_registration_id/:id', this.updateMiddlewares(), this.route(this.updateRegistrationId));
        this.router.post('/send_notification', this.createMiddlewares(), this.route(this.sendNotification));
    }
    sendNotification(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield controllers_1.userController.sendNotification(req.body);
            this.onSuccess(res, result);
        });
    }
    updateRegistrationId(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield this.controller.updateRegistrationId(req.body, {
                filter: { id }
            });
            this.onSuccess(res, result);
        });
    }
    checkUsername(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.controller.checkUsername(req.body);
            if (result['duplicate'] == true) {
                res.status(201).json({
                    code: 201,
                    results: { object: { message: result['resultOfCheckUser'] } }
                });
            }
            else {
                this.onSuccess(res, result);
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield this.controller.update(req.body, {
                filter: { id }
            });
            this.onSuccess(res, result);
        });
    }
    create(req, res) {
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
    getList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let objects = yield this.controller.getList(req.queryInfo);
            if (objects.toJSON) {
                objects = objects.toJSON();
            }
            const resultNotPass = Object.assign({
                objects
            }, undefined);
            const rowJson = resultNotPass.objects.rows;
            for (let i = 0; i < rowJson.length; i++) {
                const jsonObject = rowJson[i].dataValues;
                delete jsonObject["password"];
                resultNotPass.objects.rows[i].dataValues = jsonObject;
            }
            const page = _.floor(req.queryInfo.offset / req.queryInfo.limit) + 1;
            res.json({
                code: 200,
                results: resultNotPass,
                pagination: {
                    'current_page': page,
                    'next_page': page + 1,
                    'prev_page': page - 1,
                    'limit': req.queryInfo.limit
                }
            });
        });
    }
    getItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            req.queryInfo.filter.id = id;
            let object = yield this.controller.getItem(req.queryInfo);
            object = object || {};
            const resultNotPass = Object.assign({
                object
            }, undefined);
            const rowJson = resultNotPass.object;
            const jsonObject = rowJson.dataValues;
            delete jsonObject["password"];
            resultNotPass.object.dataValues = jsonObject;
            if (Object.keys(object).length === 0) {
                res.json({
                    code: 200
                });
            }
            else {
                res.json({
                    code: 200,
                    results: resultNotPass
                });
            }
        });
    }
    getBillsMiddlewares() {
        return [
            middlewares_1.authInfoMiddleware.run()
        ];
    }
    getBills(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            req.pageInfo = {};
            req.pageInfo.limit = parseInt(req.query.limit) || 10;
            req.pageInfo.offset = parseInt(req.query.page) || 1;
            req.pageInfo.offset = (req.pageInfo.offset - 1) * req.pageInfo.limit;
            const result = yield this.controller.getBills(req.tokenInfo.payload.user_id, req.pageInfo);
            this.onSuccessAsList(res, result, undefined, req.pageInfo);
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
        return [middlewares_1.authInfoMiddleware.run(), middlewares_1.adminAuthInfoMiddleware.run()];
    }
    deleteAllMiddlewares() {
        return [middlewares_1.authInfoMiddleware.run(), middlewares_1.adminAuthInfoMiddleware.run()];
    }
    createMiddlewares() {
        return [middlewares_1.authInfoMiddleware.run(), middlewares_1.adminAuthInfoMiddleware.run()];
    }
    upgradeMiddlewares() {
        return [
            middlewares_1.authInfoMiddleware.run(),
            middlewares_1.adminAuthInfoMiddleware.run()
        ];
    }
    upgrade(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateJSON(req.body, {
                type: 'object',
                properties: {
                    user_id: {
                        type: 'string',
                        format: 'uuid'
                    },
                    user_type: {
                        enum: [
                            'SILVER',
                            'GOLD',
                            'DIAMOND'
                        ]
                    }
                },
                required: ['user_id', 'user_type']
            });
            const result = yield this.controller.upgrade(req.body);
            this.onSuccess(res, result);
        });
    }
    downgradeMiddlewares() {
        return [
            middlewares_1.authInfoMiddleware.run(),
            middlewares_1.adminAuthInfoMiddleware.run()
        ];
    }
    downgrade(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.validateJSON(req.body, {
                type: 'object',
                properties: {
                    user_id: {
                        type: 'string',
                        format: 'uuid'
                    }
                },
                required: ['user_id']
            });
            const result = yield this.controller.downgrade(req.body);
            this.onSuccess(res, result);
        });
    }
}
exports.default = UserRouter;
//# sourceMappingURL=user.js.map