import { BaseController } from './baseController'
import * as _ from 'lodash'
import * as admin from 'firebase-admin'
import {
    tokenService,
    firebaseService,
    employeeService,
    errorService
} from '@/services';
export class AuthController extends BaseController {
    constructor() {
        super()
    }
    async login(params: { firebaseUserInfo: admin.auth.DecodedIdToken }) {
        // Tra ve token
        const token = await tokenService.getAdminToken()
        return {
            accessToken: token
        }
    }

    async employeeLogin(id_token: string) {
        const user = await firebaseService.verifyIdToken(id_token);

        if (user.email_verified) {
            const employee = await employeeService.getItem({
                filter: {
                    email: user.email
                }
            })
            employee.dataValues.role = "admin"
            employee.dataValues.access_token = await tokenService.generateToken({}, "admin");
            return employee;
        }
        else throw errorService.auth.emailNotVerified();
    }

}