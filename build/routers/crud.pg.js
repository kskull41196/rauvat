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
const _ = require("lodash");
const base_1 = require("./base");
const middlewares_1 = require("@/middlewares");
class CrudRouter extends base_1.BaseRouter {
    constructor(controller) {
        super();
        this.controller = controller;
        this.router = express.Router();
        this.customRouting();
        this.defaultRouting();
    }
    defaultRouting() {
        this.router.get('/', this.getListMiddlewares(), this.route(this.getList));
        this.router.get('/:id', this.getItemMiddlewares(), this.route(this.getItem));
        this.router.post('/', this.createMiddlewares(), this.route(this.create));
        this.router.put('/:id', this.updateMiddlewares(), this.route(this.update));
        this.router.delete('/:id', this.deleteMiddlewares(), this.route(this.delete));
        this.router.delete('/', this.deleteAllMiddlewares(), this.route(this.deleteAll));
    }
    customRouting() {
    }
    checkGetMiddlewares() {
        return [
            middlewares_1.authInfoMiddleware.run()
        ];
    }
    getListMiddlewares() {
        return [
            middlewares_1.queryMiddleware.run()
        ];
    }
    getList(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.controller.getList(req.queryInfo);
            this.onSuccessAsList(res, result, undefined, req.queryInfo);
        });
    }
    getItemMiddlewares() {
        return [
            middlewares_1.queryMiddleware.run()
        ];
    }
    getItem(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            req.queryInfo.filter.id = id;
            const result = yield this.controller.getItem(req.queryInfo);
            this.onSuccess(res, result);
        });
    }
    createMiddlewares() {
        return [
            middlewares_1.authInfoMiddleware.run()
        ];
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.controller.create(req.body);
            this.onSuccess(res, result);
        });
    }
    updateMiddlewares() {
        return [
            middlewares_1.authInfoMiddleware.run()
        ];
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
    deleteMiddlewares() {
        return [
            middlewares_1.authInfoMiddleware.run()
        ];
    }
    delete(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { id } = req.params;
            const result = yield this.controller.delete({
                filter: { id }
            });
            this.onSuccess(res, result);
        });
    }
    deleteAllMiddlewares() {
        return [
            middlewares_1.authInfoMiddleware.run()
        ];
    }
    deleteAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            if (_.has(req.query, "items")) {
                req.query.items = JSON.parse(req.query.items) || {};
            }
            yield this.validateJSON(req.query, {
                type: "object",
                properties: {
                    items: {
                        type: 'array',
                        uniqueItems: true,
                        minItems: 1,
                        items: { type: "string" }
                    }
                },
                required: ['items'],
                additionalProperties: false
            });
            const { items } = req.query;
            const result = yield this.controller.deleteAll({
                filter: { id: { $in: items } }
            });
            this.onSuccess(res, result);
        });
    }
}
exports.CrudRouter = CrudRouter;
//# sourceMappingURL=crud.pg.js.map