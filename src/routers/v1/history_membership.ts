import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { historyMembershipController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class HistoryMembershipController extends CrudRouter<typeof historyMembershipController> {
    constructor() {
        super(historyMembershipController)
    }
}