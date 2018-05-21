import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { postController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware } from '@/middlewares'

export default class PostRouter extends CrudRouter<typeof postController> {
    constructor() {
        super(postController)

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