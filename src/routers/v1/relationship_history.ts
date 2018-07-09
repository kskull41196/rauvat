import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { relationshipHistoryController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class RelationshipHistory extends CrudRouter<typeof relationshipHistoryController> {
    constructor() {
        super(relationshipHistoryController)

    }
  
}