"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crud_1 = require("../crud");
const controllers_1 = require("@/controllers");
class Bill_activityRouter extends crud_1.CrudRouter {
    constructor() {
        super(controllers_1.billActivityController);
    }
}
exports.default = Bill_activityRouter;
//# sourceMappingURL=bill_activity.js.map