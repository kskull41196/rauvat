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

    async employeeLogin(id_token: string){
        let user = await firebaseService.verifyIdToken(id_token);

        if (user.email_verified){
            let employee = await employeeService.getItem({
                filter: {
                    email: user.email
                }
            })
            employee.dataValues.role = "ADMIN"
            employee.dataValues.access_token = await tokenService.createJwtToken(employee);
            return employee;
        }
        else throw errorService.auth.emailNotVerified();
    }

}