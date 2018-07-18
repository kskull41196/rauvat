"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crud_1 = require("../crud");
const controllers_1 = require("@/controllers");
class ProductGlobalAttributeRouter extends crud_1.CrudRouter {
    constructor() {
        super(controllers_1.productGlobalAttributeController);
    }
}
exports.default = ProductGlobalAttributeRouter;
//# sourceMappingURL=product_global_attribute.js.map