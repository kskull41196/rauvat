import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { relationshipController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class Relationship extends CrudRouter<typeof relationshipController> {
    constructor() {
        super(relationshipController)

    }

}