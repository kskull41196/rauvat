import { BaseController } from './baseController'
import * as _ from 'lodash'
import * as admin from 'firebase-admin'
import { tokenService } from '@/services';
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
}