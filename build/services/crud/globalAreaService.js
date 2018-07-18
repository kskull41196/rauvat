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
class GlobalAreaService extends crudService_pg_1.CrudService {
    constructor() {
        super(tables_1.GlobalArea);
    }
    getItemWithParents(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            let item = yield this.exec(this.model.findById(option.filter.id), { allowNull: false });
            let areaArray = [];
            areaArray.push(item);
            while (item.parent_id != undefined) {
                item = yield this.exec(this.model.findOne({ where: { id: item.parent_id } }), { allowNull: false });
                areaArray.push(item);
            }
            return areaArray;
        });
    }
}
exports.GlobalAreaService = GlobalAreaService;
//# sourceMappingURL=globalAreaService.js.map