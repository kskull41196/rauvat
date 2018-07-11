import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { vnpayHistoryController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class VnpayHistory extends CrudRouter<typeof vnpayHistoryController> {
    constructor() {
        super(vnpayHistoryController)

    }
}