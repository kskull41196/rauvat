"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crud_1 = require("../crud");
const controllers_1 = require("@/controllers");
class HistoryMembershipController extends crud_1.CrudRouter {
    constructor() {
        super(controllers_1.historyMembershipController);
    }
}
exports.default = HistoryMembershipController;
//# sourceMappingURL=history_membership.js.map