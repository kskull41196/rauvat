"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crudController_1 = require("../crudController");
const services_1 = require("@/services");
class WalletImportController extends crudController_1.CrudController {
    constructor() {
        super(services_1.walletImportService);
    }
}
exports.WalletImportController = WalletImportController;
//# sourceMappingURL=walletImportController.js.map