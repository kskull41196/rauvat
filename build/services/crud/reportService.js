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
class ReportService extends crudService_pg_1.CrudService {
    constructor() {
        super(tables_1.Report);
    }
    update(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            let description = params.description;
            let user_id = params.user_id;
            let reported_id_type = params.reported_id_type;
            let reported_id = params.reported_id;
            const item = yield this.exec(this.model.findById(option.filter.id), { allowNull: false });
            yield this.exec(item.update({ description, user_id, reported_id_type, reported_id }));
            return yield this.getItem(option);
        });
    }
    updateCommentAdmin(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            let admin_comment = params.admin_comment;
            const item = yield this.exec(this.model.findOne({ where: { id: params.id } }), { allowNull: false });
            yield this.exec(item.update({ admin_comment }));
            return yield this.getItem(option);
        });
    }
}
exports.ReportService = ReportService;
//# sourceMappingURL=reportService.js.map