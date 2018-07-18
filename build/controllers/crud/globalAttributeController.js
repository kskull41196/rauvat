"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crudController_1 = require("../crudController");
const services_1 = require("@/services");
class GlobalAttributeController extends crudController_1.CrudController {
    constructor() {
        super(services_1.globalAttributeService);
    }
}
exports.GlobalAttributeController = GlobalAttributeController;
//# sourceMappingURL=globalAttributeController.js.map