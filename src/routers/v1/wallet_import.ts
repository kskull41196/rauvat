import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { walletImportController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class Wallet_importRouter extends CrudRouter<typeof walletImportController> {
    constructor() {
        super(walletImportController)

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