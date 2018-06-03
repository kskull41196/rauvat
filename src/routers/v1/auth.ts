import { CrudRouter } from '../crud'
import { errorService, tokenService } from '@/services'
import * as express from 'express'
import { Request, Response, BaseRouter } from '../base'
import {
    authController,
    userController
} from '@/controllers';
import {
    authInfoMiddleware,
    adminAuthInfoMiddleware
} from '@/middlewares'
import * as jwt from 'jsonwebtoken'
import { token } from 'morgan';
import * as crypto from 'crypto'
const CONVERT_MD5 = 'md5'
const SECRET_KEY = 'caco3+hno3'
const ENCODING = 'hex'
const TWO_MONTHS_IN_SECONDS = 2 * 30 * 24 * 60 * 60
export default class AuthRouter extends BaseRouter {
    router: express.Router
    constructor() {
        super()
        this.router = express.Router()
        this.router.post('/login', this.route(this.login))
        this.router.post('/register/', this.route(this.registerUser));
        this.router.put('/forgetpass/', this.route(this.getPassword));
        this.router.get('/gettoken', this.route(this.getToken))
        this.router.post('/employee_login', this.route(this.employeeLogin));
        this.router.post('/test', this.testMiddlewares());
    }

    testMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }
    async getToken(req: Request, res: Response) {
        const getToken ="ADMIN";
        var token = await tokenService.createJwtToken(getToken);
        this.onSuccess(res, getToken, { token })

    }
    async getPassword(req: Request, res: Response) {
        var md5Password = crypto.createHash(CONVERT_MD5).update(req.body.password).digest(ENCODING);
        req.body.password = md5Password;
        const result = await userController.getPassword(req.body)
        this.onSuccess(res, result)
    }
    async registerUser(req: Request, res: Response) {
        if (req.body.fullname == undefined) {
            req.body.fullname = "";
        }
        if (req.body.sex == undefined) {
            req.body.sex = "Other"
        }
        if (req.body.birthday == undefined) {
            req.body.birthday = new Date();
        }
        if (req.body.address == undefined) {
            req.body.address = ""
        }
        if (req.body.email == undefined) {
            req.body.email = ""
        }
        const result = await userController.create(req.body)

        this.onSuccess(res, result)

    }
    async login(req: Request, res: Response) {
        var md5_password = crypto.createHash(CONVERT_MD5).update(req.body.password).digest('hex');
        req.body.password = md5_password;
        const dataObtained = await userController.checkLogin(req.body)
        dataObtained.dataValues.role = "USER";
        // var token = await tokenService.createJwtToken(dataObtained);
        let token = await tokenService.getUserToken(dataObtained.id)
        this.onSuccess(res, dataObtained, { token })
    }

    async employeeLogin(req: Request, res: Response) {
        await this.validateJSON(req.body, {
            type: 'object',
            properties: {
                id_token: {
                    type: 'string'
                }
            },
            required: ['id_token']
        });

        const bearer = req.body.id_token.split(' ');
        const bearerToken = bearer[1];
        const result = await authController.employeeLogin(bearerToken);

        this.onSuccess(res, result);

    }

} 