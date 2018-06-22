import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { favoriteProductController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class FavoriteProductRouter extends CrudRouter<typeof favoriteProductController> {
    constructor() {
        super(favoriteProductController)

    }
    customRouting(){
        this.router.post('/add',this.createMiddlewares(),this.route(this.addFavoriteProduct));
        this.router.delete('/remove', this.deleteMiddlewares(), this.route(this.removeFavoriteProduct))
    }
    async addFavoriteProduct(req: Request, res: Response) {
        const result = await this.controller.addFavoriteProduct(req.body)
        this.onSuccess(res, result)
    }
    async removeFavoriteProduct(req: Request, res: Response) {
        const result = await this.controller.removeFavoriteProduct(req.body)
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