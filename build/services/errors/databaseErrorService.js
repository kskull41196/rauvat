"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class DatabaseException extends base_1.BaseError {
    constructor(key, message, code) {
        super({
            code: code || 500,
            type: `database_exception_${key}`,
            message
        });
    }
}
class DatabaseErrorService {
    recordNotFound(message = 'Record Not Found') {
        return new DatabaseException('record_not_found', message);
    }
    queryFail(message = "Query Fail") {
        return new DatabaseException('query_fail', message);
    }
    invalidScope(message = "Invalid scope") {
        return new DatabaseException('invalid_scope', message);
    }
}
exports.DatabaseErrorService = DatabaseErrorService;
//# sourceMappingURL=databaseErrorService.js.map