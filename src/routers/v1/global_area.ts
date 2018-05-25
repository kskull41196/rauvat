import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { global_areaController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class Global_areaRouter extends CrudRouter<typeof global_areaController> {
    constructor() {
        super(global_areaController)

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