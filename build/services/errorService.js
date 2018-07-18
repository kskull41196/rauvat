"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors = require("./errors");
class ErrorService {
    constructor() {
        this.router = new errors.RouterErrorService();
        this.auth = new errors.AuthErrorService();
        this.database = new errors.DatabaseErrorService();
        this.firebase = new errors.FirebaseErrorService();
    }
}
exports.ErrorService = ErrorService;
//# sourceMappingURL=errorService.js.map