"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crudController_1 = require("../crudController");
const services_1 = require("@/services");
class WalletExportController extends crudController_1.CrudController {
    constructor() {
        super(services_1.walletExportService);
    }
}
exports.WalletExportController = WalletExportController;
//# sourceMappingURL=walletExportController.js.map