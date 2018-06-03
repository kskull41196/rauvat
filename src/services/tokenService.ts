import { errorService } from '@/services'
import { config } from '@/config'
import * as moment from 'moment'
import * as jwt from 'jwt-simple'
import * as jsonwebtoken from 'jsonwebtoken'
export interface IGenerateTokenOption {
    exp?: moment.Moment
    secret?: string
}
export interface IDecodeTokenOption {
    secret?: string
}
export class TokenService {

    constructor() {
    }

    async generateToken(payload: any, role: string, option: IGenerateTokenOption = {
        exp : moment().add(5, "minutes")
    }) {
        const secret = option.secret || config.server.secret
        return jwt.encode({
            payload: payload,
            role: role,
            exp: option.exp
        }, secret);
    }
    async decodeToken(token: string, option?: IDecodeTokenOption) {
        let result = undefined
        try {
            const secret = (option && option.secret) || config.server.secret
            result = jwt.decode(token, secret);
        } catch (err) {
            throw errorService.auth.badToken();

        }
        if (result) {
            if ((new Date(result.exp)).getTime() <= (Date.now() / 1000)) {
                throw errorService.auth.tokenExpired()
            }
            return result;
        } else {
            throw errorService.auth.badToken();
        }
    }
    async getAdminToken(secret: string = "") {
        secret = secret + config.server.secret
        return await this.generateToken({}, "admin", {
            exp: moment().add(1, 'days'),
            secret
        })
    }
    async getWriteToken(secret: string = "") {
        secret = secret + config.server.secret
        return await this.generateToken({}, "write", {
            exp: moment().add(1, 'days'),
            secret
        })
    }
    async getReadToken(secret: string = "") {
        secret = secret + config.server.secret
        return await this.generateToken({}, "read", {
            exp: moment().add(1, 'days'),
            secret
        })
    }

    async createJwtToken(payload: any){
        let secret = config.server.secret;
        return await jsonwebtoken.sign({ payload }, secret, { expiresIn: 60 * 24 * 60 * 60 });
    }
}