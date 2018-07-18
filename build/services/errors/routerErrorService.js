"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class RouterException extends base_1.BaseError {
    constructor(key, message, code) {
        super({
            code: code || 500,
            type: `router_exception_${key}`,
            message
        });
    }
}
class RouterErrorService {
    somethingWentWrong() {
        return new RouterException('something_went_wrong', 'Sorry! Something went wrong.');
    }
    badRequest() {
        return new RouterException('bad_request', 'Bad Request.', 400);
    }
    requestDataInvalid(message) {
        return new RouterException('data_invalid', message, 403);
    }
}
exports.RouterErrorService = RouterErrorService;
//# sourceMappingURL=routerErrorService.js.map