"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crud_1 = require("../crud");
const controllers_1 = require("@/controllers");
class PaidHistoryRouter extends crud_1.CrudRouter {
    constructor() {
        super(controllers_1.paidHistoryController);
    }
}
exports.default = PaidHistoryRouter;
//# sourceMappingURL=paid_history.js.map