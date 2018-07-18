"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crud_1 = require("../crud");
const controllers_1 = require("@/controllers");
class Bill_itemRouter extends crud_1.CrudRouter {
    constructor() {
        super(controllers_1.billItemController);
    }
}
exports.default = Bill_itemRouter;
//# sourceMappingURL=bill_item.js.map