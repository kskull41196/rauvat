import { CrudRouter } from '../crud'
import { errorService } from '@/services'
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
export default class AuthRouter extends BaseRouter {
    router: express.Router
    constructor() {
        super()
        this.router = express.Router()
        this.router.post('/login', this.route(this.login))
        this.router.post('/register/', this.route(this.checkCreateUser));
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

        const getToken = await userController.checkLogin(req.body)

        jwt.sign({ getToken }, SECRET_KEY, { expiresIn: 60 * 24 * 60 * 60 }, (err: any, token: any) => {
            this.onSuccess(res, { token: token })
        });

    }
    async getPassword(req: Request, res: Response) {
        var MD5_PASSWORD = crypto.createHash(CONVERT_MD5).update(req.body.password).digest('hex');
        req.body.password = MD5_PASSWORD;
        const result = await userController.getPassword(req.body)
        this.onSuccess(res, result)
    }
    async checkCreateUser(req: Request, res: Response) {
            req.body.fullname = "Cập nhật";
            req.body.sex = "Other";
            req.body.birthday = new Date();;
            req.body.address = "T.Ô.I";
            req.body.user_type = "Normal";
            req.body.email = "Cập nhật";
            req.body.amount_of_like = 0;
            req.body.amount_of_comment = 0;
            req.body.amount_of_order = 0;
            req.body.amount_of_purchase = 0;
        const result = await userController.createUser(req.body)
        if (result['isDuplicated'] == false) {
            res.status(401).json({
                code: 401,
                error: result['resultString']
            });
        } else {

            this.onSuccess(res, result)
        }
    }
    async login(req: Request, res: Response) {
        var md5_password = crypto.createHash(CONVERT_MD5).update(req.body.password).digest('hex');
        req.body.password = md5_password;
        const dataObtained = await userController.checkLogin(req.body)
        if (dataObtained['username'] == undefined && dataObtained['password'] == undefined) {
            res.status(401).json({
                code: 401,
                error: "Vui lòng kiểm tra lại Tài khoản hoặc mật khẩu"
            });
        } else {
            dataObtained.role = "USER";
            jwt.sign({ dataObtained }, SECRET_KEY, { expiresIn: 60 * 24 * 60 * 60 }, (err: any, token: any) => {
                this.onSuccess(res,
                    {
                        dataObtained,
                        token: token
                    }
                )
            });
        }
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
        const result = await authController.employeeLogin(req.body.id_token);

        this.onSuccess(res, result);

    }

} 