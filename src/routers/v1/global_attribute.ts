import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { globalAttributeController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class GlobalAttributeRouter extends CrudRouter<typeof globalAttributeController> {
    constructor() {
        super(globalAttributeController)

    }
    // getListMiddlewares(): any[] {
    //     return [queryMiddleware.run()]
    // }
    // getItemMiddlewares(): any[] {
    //     return [queryMiddleware.run()]
    // }
    // updateMiddlewares(): any[] {
    //     return [authInfoMiddleware.run()]
    // }
    // deleteMiddlewares(): any[] {
    //     return [authInfoMiddleware.run()]
    // }
    // deleteAllMiddlewares(): any[] {
    //     return [blockMiddleware.run()]
    // }
    // createMiddlewares(): any[] {
    //     return [authInfoMiddleware.run()]
    // }
}