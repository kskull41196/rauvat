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
const _ = require("lodash");
let Raven = require('raven');
class BaseRouter {
    onError(res, error) {
        Raven.captureException(error);
        if (!error.options) {
            console.log("UNKNOW ERROR", error);
            const err = services_1.errorService.router.somethingWentWrong();
            res.status(err.options.code).json(err.options);
        }
        else {
            res.status(error.options.code).json(error.options);
        }
    }
    onSuccess(res, object = {}, extras = {}) {
        object = object || {};
        if (Object.keys(object).length === 0) {
            res.json({
                code: 200
            });
        }
        else {
            res.json({
                code: 200,
                results: Object.assign({
                    object
                }, extras)
            });
        }
    }
    onSuccessAsList(res, objects = [], extras = {}, option = {
        offset: 0, limit: config_1.config.database.defaultPageSize
    }) {
        if (objects.toJSON) {
            objects = objects.toJSON();
        }
        const page = _.floor(option.offset / option.limit) + 1;
        res.json({
            code: 200,
            results: Object.assign({
                objects
            }, extras),
            pagination: {
                'current_page': page,
                'next_page': page + 1,
                'prev_page': page - 1,
                'limit': option.limit
            }
        });
    }
    validateJSON(body, schema) {
        return __awaiter(this, void 0, void 0, function* () {
            const validate = services_1.utilService.validateJSON(schema, body);
            if (!validate.isValid) {
                throw services_1.errorService.router.requestDataInvalid(validate.message);
            }
        });
    }
    route(func) {
        return (req, res) => func
            .bind(this)(req, res)
            .catch((error) => {
            this.onError(res, error);
        });
    }
}
exports.BaseRouter = BaseRouter;
//# sourceMappingURL=base.js.map