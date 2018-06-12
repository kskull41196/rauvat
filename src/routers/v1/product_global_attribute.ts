import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { productGlobalAttributeController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class ProductGlobalAttributeRouter extends CrudRouter<typeof productGlobalAttributeController> {
    constructor() {
        super(productGlobalAttributeController)

    }
}