import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { walletController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware, adminAuthInfoMiddleware } from '@/middlewares'

export default class WalletRouter extends CrudRouter<typeof walletController> {
    constructor() {
        super(walletController)

    }
    customRouting() {
        this.router.post('/export/:id', this.exportMiddlewares(), this.route(this.export))
        this.router.post('/import/:id', this.importMiddlewares() , this.route(this.import))
    }
    async export(req: Request, res: Response) {
        const { id } = req.params
        const result = await this.controller.export(req.body, {
            filter: { id }
        })
        this.onSuccess(res, result)
    };
    async import(req: Request, res: Response) {
        const { id } = req.params
        const result = await this.controller.import(req.body, {
            filter: { id }
        })
        this.onSuccess(res, result)
    };




    exportMiddlewares(): any[] {
        return [adminAuthInfoMiddleware.run()]
    }
    importMiddlewares(): any[] {
        return [adminAuthInfoMiddleware.run()]
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
        return []
    }
    deleteAllMiddlewares(): any[] {
        return [blockMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return []
    }
}