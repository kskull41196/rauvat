import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { reportController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class ReportRouter extends CrudRouter<typeof reportController> {
    constructor() {
        super(reportController)

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
        return [authInfoMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [authInfoMiddleware.run()]
    }
}