import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { followingController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class Following extends CrudRouter<typeof followingController> {
    constructor() {
        super(followingController)

    }

}