import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { billActivityController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class Bill_activityRouter extends CrudRouter<typeof billActivityController> {
    constructor() {
        super(billActivityController)

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