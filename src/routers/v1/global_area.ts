import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { globalAreaController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class GlobalAreaRouter extends CrudRouter<typeof globalAreaController> {
    constructor() {
        super(globalAreaController)

    }
    customRouting(){
        this.router.post('/get_item_with_parents', this.route(this.getItemWithParents))
    }
    async getItemWithParents(req: Request, res: Response) {
        const result = await this.controller.getItemWithParents(req.body)
        this.onSuccess(res, result)
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