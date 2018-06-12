import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { globalPromotionController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware,adminAuthInfoMiddleware } from '@/middlewares'

export default class GlobalPromotionRouter extends CrudRouter<typeof globalPromotionController> {
    constructor() {
        super(globalPromotionController)
    }
    customRouting() {
        this.router.post('/statistic', this.statisticPromotionMiddlewares(), this.route(this.statisticPromotion));
    }
    async statisticPromotion(req: Request, res: Response) {
        const result = await this.controller.statisticPromotion(req.body);
        this.onSuccess(res, result);
    }
    statisticPromotionMiddlewares(): any[] {
        return [authInfoMiddleware.run(), adminAuthInfoMiddleware.run()]
    }
    getListMiddlewares(): any[] {
        return [queryMiddleware.run()]
    }
    getItemMiddlewares(): any[] {
        return [queryMiddleware.run()]
    }
    updateMiddlewares(): any[] {
        return [authInfoMiddleware.run()]
    }
    deleteMiddlewares(): any[] {
        return [authInfoMiddleware.run()]
    }
    deleteAllMiddlewares(): any[] {
        return [blockMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [authInfoMiddleware.run()]
    }
}