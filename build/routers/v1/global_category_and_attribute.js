"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crud_1 = require("../crud");
const controllers_1 = require("@/controllers");
class GlobalCategoryAndAttributeRouter extends crud_1.CrudRouter {
    constructor() {
        super(controllers_1.globalCategoryAndAttributeController);
    }
}
exports.default = GlobalCategoryAndAttributeRouter;
//# sourceMappingURL=global_category_and_attribute.js.map