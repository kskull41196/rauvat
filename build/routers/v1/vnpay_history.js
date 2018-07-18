"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crud_1 = require("../crud");
const controllers_1 = require("@/controllers");
class VnpayHistory extends crud_1.CrudRouter {
    constructor() {
        super(controllers_1.vnpayHistoryController);
    }
}
exports.default = VnpayHistory;
//# sourceMappingURL=vnpay_history.js.map