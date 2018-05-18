import { BaseError } from './base'
class AuthException extends BaseError {
    constructor(key: string, message: string, code?: number) {
        super({
            code: code || 401,
            type: `auth_exception_${key}`,
            message
        })
    }
}
export class AuthErrorService {
    unauthorized() {
        return new AuthException('unauthorized', 'Unauthorized.')
    }
    permissionDeny() {
        return new AuthException('permission_deny', 'Permission Deny')
    }
    badToken() {
        return new AuthException('bad_token', 'Bad Token')
    }
    tokenExpired() {
        return new AuthException('token_expired', 'Token Expried')
    }
 
}