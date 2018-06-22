import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { favoritePostController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class FavoritePostRouter extends CrudRouter<typeof favoritePostController> {
    constructor() {
        super(favoritePostController)

    }
    customRouting(){
        this.router.post('/add',this.createMiddlewares(),this.route(this.addFavoritePost));
        this.router.delete('/remove', this.deleteMiddlewares(), this.route(this.removeFavoritePost))
    }
    async addFavoritePost(req: Request, res: Response) {
        const result = await this.controller.addFavoritePost(req.body)
        this.onSuccess(res, result)
    }
    async removeFavoritePost(req: Request, res: Response) {
        const result = await this.controller.removeFavoritePost(req.body)
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