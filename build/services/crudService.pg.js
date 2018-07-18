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
const errors_1 = require("@/services/errors");
const config_1 = require("@/config");
const models_1 = require("@/models");
class CrudService {
    constructor(model) {
        this.model = model;
    }
    transaction() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield models_1.sequelize.transaction();
        });
    }
    exec(promise, option = { allowNull: true }) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const result = yield promise;
                if ((result === undefined || result === null) && !option.allowNull)
                    throw services_1.errorService.database.recordNotFound();
                return result;
            }
            catch (err) {
                if (err instanceof errors_1.BaseError)
                    throw err;
                if (config_1.config.server.debug) {
                    if (err.errors && err.errors[0]) {
                        throw services_1.errorService.database.queryFail(err.errors[0].message);
                    }
                    else {
                        throw services_1.errorService.database.queryFail(err.message);
                    }
                }
                else {
                    throw services_1.errorService.router.somethingWentWrong();
                }
            }
        });
    }
    getList(option = {
        limit: config_1.config.database.defaultPageSize,
        offset: 0,
        scope: ['defaultScope']
    }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.exec(this.modelWithScope(option.scope)
                .findAndCountAll(this.applyFindOptions(option)));
        });
    }
    getItem(option = {
        scope: ['defaultScope']
    }) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.exec(this.modelWithScope(option.scope)
                .findOne(this.applyFindOptions(option)), { allowNull: true });
        });
    }
    create(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.exec(this.model.create(params, this.applyCreateOptions(option)));
        });
    }
    update(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.exec(this.model.findById(option.filter.id), { allowNull: false });
            yield this.exec(item.update(params));
            return yield this.getItem(option);
        });
    }
    delete(option) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.exec(this.getItem(option), { allowNull: false });
            return yield this.exec(item.destroy());
        });
    }
    deleteAll(option) {
        return __awaiter(this, void 0, void 0, function* () {
            const t = yield this.transaction();
            option.transaction = t;
            try {
                const result = yield this.exec(this.model.destroy(this.applyDestroyOptions(option)));
                t.commit();
                return result;
            }
            catch (err) {
                t.rollback();
                throw err;
            }
        });
    }
    applyFindOptions(option = {}) {
        const query = {
            where: option.filter,
            limit: option.limit,
            offset: option.offset,
            order: option.order,
            attributes: option.attributes,
            include: option.include,
            paranoid: option.paranoid,
        };
        return query;
    }
    applyCreateOptions(option = {}) {
        const query = {
            transaction: option.transaction
        };
        return query;
    }
    applyDestroyOptions(option = {}) {
        const query = {
            where: option.filter,
            limit: option.limit,
            transaction: option.transaction
        };
        return query;
    }
    modelWithScope(scope) {
        try {
            return this.model.scope(scope);
        }
        catch (err) {
            throw services_1.errorService.database.invalidScope(err.message);
        }
    }
}
exports.CrudService = CrudService;
//# sourceMappingURL=crudService.pg.js.map