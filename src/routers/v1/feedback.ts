import { CrudRouter } from '../crud'
import { errorService, tokenService } from '@/services'
import * as express from 'express'
import { Request, Response, BaseRouter } from '../base'
import {
    reportController
} from '@/controllers';
import {
    authInfoMiddleware,
    adminAuthInfoMiddleware
} from '@/middlewares'
export default class AuthRouter extends BaseRouter {
    router: express.Router
    constructor() {
        super()
        this.router = express.Router()
        this.router.put('/admin_comment', this.editCommentAdminMiddlewares(), this.route(this.updateCommentAdmin));
        
    }
    async updateCommentAdmin(req: Request, res: Response) {
        const result = await reportController.updateCommentAdmin(req.body)
        this.onSuccess(res, result)
    }

    editCommentAdminMiddlewares(): any[] {
        return [
            authInfoMiddleware.run(),
            adminAuthInfoMiddleware.run()
        ]
    }
} 