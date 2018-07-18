"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crudController_1 = require("../crudController");
const services_1 = require("@/services");
class ProductGlobalAttributeController extends crudController_1.CrudController {
    constructor() {
        super(services_1.productGlobalAttributeService);
    }
}
exports.ProductGlobalAttributeController = ProductGlobalAttributeController;
//# sourceMappingURL=productGlobalAttributeController.js.map