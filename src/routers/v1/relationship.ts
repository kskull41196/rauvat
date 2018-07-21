import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { relationshipController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class Relationship extends CrudRouter<typeof relationshipController> {
    constructor() {
        super(relationshipController)

    }

    customRouting(){
        this.router.get('/friends', this.getFriendsMiddlewares(), this.route(this.getFriends));
    }

    getFriendsMiddlewares(): any[]{
        return [
            authInfoMiddleware.run(),
            queryMiddleware.run()
        ]
    }

    async getFriends(req: Request, res: Response){
        req.query.user_id = req.tokenInfo.payload.user_id;
        const result = await this.controller.getFriends(req.query);
        this.onSuccess(res, result);
    }

}
