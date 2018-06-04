import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { walletExportController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class Wallet_exportRouter extends CrudRouter<typeof walletExportController> {
    constructor() {
        super(walletExportController)

    }
    getListMiddlewares(): any[] {
        return [queryMiddleware.run()]
    }
    getItemMiddlewares(): any[] {
        return [queryMiddleware.run()]
    }
    updateMiddlewares(): any[] {
        return [blockMiddleware.run()]
    }
    deleteMiddlewares(): any[] {
        return [blockMiddleware.run()]
    }
    deleteAllMiddlewares(): any[] {
        return [blockMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [blockMiddleware.run()]
    }
}