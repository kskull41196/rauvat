import { CrudRouter } from '../crud'
import { errorService, tokenService } from '@/services'
import * as express from 'express'
import { Request, Response, BaseRouter } from '../base'
import {
    authController,
    globalPromotionController
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
        this.router.post('/general', this.statisticPromotionMiddlewares(), this.route(this.statisticPromotion));
    }

    async statisticPromotion(req: Request, res: Response) {
        const result = await globalPromotionController.statisticPromotion(req.body);
        this.onSuccess(res, result);
    }
    statisticPromotionMiddlewares(): any[] {
        return [authInfoMiddleware.run(), adminAuthInfoMiddleware.run()]
    }
    
} 