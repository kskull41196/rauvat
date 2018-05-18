import { CrudRouter } from '../crud'
import { errorService } from '@/services'
import * as express from 'express'
import { Request, Response, BaseRouter } from '../base'
import { firebaseAuthMiddleware } from '@/middlewares';
import { authController } from '@/controllers';

export default class AuthRouter extends BaseRouter {
    router: express.Router
    constructor() {
        super()
        this.router = express.Router()
        this.router.post('/login', this.loginMiddlewares(), this.route(this.login))
        this.router.get('/hello', this.route(this.hello));
    }
    loginMiddlewares(): any[] {
        return [firebaseAuthMiddleware.run()]
    }
    async login(req: Request, res: Response) {
        const result = await authController.login({ firebaseUserInfo: req.firebaseUserInfo })
        this.onSuccess(res, result)
    }

    async hello (req: Request, res: Response) {
        this.onSuccess(res, {
            hello: 'test'
        });
    }
} 