"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class AuthException extends base_1.BaseError {
    constructor(key, message, code) {
        super({
            code: code || 401,
            type: `auth_exception_${key}`,
            message
        });
    }
}
class AuthErrorService {
    unauthorized() {
        return new AuthException('unauthorized', 'Unauthorized.');
    }
    permissionDeny() {
        return new AuthException('permission_deny', 'Permission Deny');
    }
    badToken() {
        return new AuthException('bad_token', 'Bad Token');
    }
    tokenExpired() {
        return new AuthException('token_expired', 'Token Expried');
    }
    emailNotVerified() {
        return new AuthException('email_not_verified', 'Email not verified');
    }
}
exports.AuthErrorService = AuthErrorService;
//# sourceMappingURL=authErrorService.js.map