import { CrudRouter } from '../crud'
import { errorService, tokenService } from '@/services'
import * as express from 'express'
import { Request, Response, BaseRouter } from '../base'
import {
    authController,
    globalPromotionController,
    storeController
} from '@/controllers';
import {
    authInfoMiddleware,
    adminAuthInfoMiddleware
} from '@/middlewares'
export default class AuthRouter extends BaseRouter {
    router: express.Router
    constructor() {
        super()
        this.router = express.Router()
        this.router.post('/general', this.statisticMiddlewares(), this.route(this.statisticGeneral));
        this.router.post('/trading', this.statisticMiddlewares(), this.route(this.statisticTrading));
    }

    async statisticGeneral(req: Request, res: Response) {
        const result = await globalPromotionController.statisticGeneral(req.body);
        this.onSuccess(res, result);
    }
    async statisticTrading(req: Request, res: Response) {
        const result = await storeController.statisticTrading(req.body);
        this.onSuccess(res, result);
    }
    statisticMiddlewares(): any[] {
        return [authInfoMiddleware.run(), adminAuthInfoMiddleware.run()]
    }
    
} 