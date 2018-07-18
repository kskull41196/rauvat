"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crudService_pg_1 = require("../crudService.pg");
const tables_1 = require("@/models/tables");
class BillItemService extends crudService_pg_1.CrudService {
    constructor() {
        super(tables_1.BillItem);
    }
}
exports.BillItemService = BillItemService;
//# sourceMappingURL=billItemService.js.map