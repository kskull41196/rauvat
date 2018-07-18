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
const config_1 = require("@/config");
class QueryMiddleware extends base_1.BaseMiddleware {
    use(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            const filter = this._parseFilter(req);
            const order = this._parseOrder(req);
            const page = parseInt(req.query['page'] || 1);
            const limit = parseInt(req.query['limit'] || config_1.config.database.defaultPageSize);
            const offset = parseInt(req.query['offset']) || (page - 1) * limit;
            const fields = this._parseFields(req);
            const populates = this._parsePopulates(req);
            req.queryInfo = {
                filter,
                limit,
                offset,
                fields,
                populates,
            };
            next();
        });
    }
    /**
     * Filter param only accept <and> query. <or> will be supported later
     * Format: [[key, operator, value], [key, operator, value]]
     */
    _parseFilter(req) {
        let filter = req.query['filter'];
        try {
            filter = JSON.parse(filter);
        }
        catch (ignore) {
            filter = undefined;
        }
        return filter || {};
    }
    /**
     * Format: [[key, order], [key, order]]
     */
    _parseOrder(req) {
        let order = req.query['order'];
        try {
            order = JSON.parse(order);
        }
        catch (ignore) {
            order = undefined;
        }
        return order || [
            ['updated_at', 'desc']
        ];
    }
    _parseFields(req) {
        let fields = req.query['fields'];
        try {
            fields = JSON.parse(fields);
        }
        catch (ignore) {
            fields = undefined;
        }
        return fields;
    }
    _parsePopulates(req) {
        let populates = req.query['populates'];
        try {
            populates = JSON.parse(populates);
        }
        catch (ignore) {
            populates = undefined;
        }
        return populates;
    }
}
exports.QueryMiddleware = QueryMiddleware;
//# sourceMappingURL=queryMiddleware-mongo.js.map