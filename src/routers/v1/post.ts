import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { postController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class PostRouter extends CrudRouter<typeof postController> {
    constructor() {
        super(postController)

    }
    customRouting() {
        this.router.get('/get_post_with_history/:id', this.route(this.getPostWithHistory))
    }
    async update(req: Request, res: Response) {
        const { id } = req.params
        req.body.editor = req.tokenInfo.payload.employee_id || req.tokenInfo.payload.user_id
        req.body.editor_role = req.tokenInfo.role
        const result = await this.controller.update(req.body, {
            filter: { id }
        })
        this.onSuccess(res, result)
    }
    async getPostWithHistory(req: Request, res: Response) {
        const { id } = req.params
        const result = await this.controller.getPostWithHistory(req.body, {
            filter: { id }
        })
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
        return [authInfoMiddleware.run()]
    }
    deleteAllMiddlewares(): any[] {
        return [blockMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [authInfoMiddleware.run()]
    }
}