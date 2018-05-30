import { CrudRouter } from '../crud'
import { errorService } from '@/services'
import * as express from 'express'
import { Request, Response, BaseRouter } from '../base'
import { authController } from '@/controllers';
import { userController } from '@/controllers'
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
    }
    async getToken(req: Request, res: Response) {

        const getToken = await userController.checkLogin(req.body)

        jwt.sign({ getToken }, SECRET_KEY, { expiresIn: 60 * 24 * 60 * 60 }, (err: any, token: any) => {
            this.onSuccess(res, { token: token })
        });

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
        if (dataObtained['username'] == undefined && dataObtained['password'] == undefined) {
            res.status(401).json({
                code: 401,
                error: "Vui lòng kiểm tra lại Tài khoản hoặc mật khẩu"
            });
        } else {
            dataObtained.dataValues.role = "USER";
            jwt.sign({ dataObtained }, SECRET_KEY, { expiresIn: TWO_MONTHS_IN_SECONDS }, (err: any, token: any) => {
                this.onSuccess(res, dataObtained, { token: token })
            });
        }
    }
} 