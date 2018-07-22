import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { followingController } from '@/controllers'
import {
    authInfoMiddleware,
    queryMiddleware,
    blockMiddleware,
    pageInfoMiddleware
} from '@/middlewares'

export default class Following extends CrudRouter<typeof followingController> {
    constructor() {
        super(followingController)

    }

    customRouting() {
        this.router.get('/followers', this.getFollowersMiddlewares(), this.route(this.getFollowers));
        this.router.get('/followings', this.getFollowingsMiddlewares(), this.route(this.getFollowings));
        this.router.get('/newfeeds', this.getNewfeedsMiddlewares(), this.route(this.getNewfeeds));
        this.router.post('/follow/:user_id', this.followUserMiddlewares(), this.route(this.followUser));
        this.router.post('/unfollow/:user_id', this.unFollowUserMiddlewares(), this.route(this.unFollowUser));
    }

    getFollowersMiddlewares(): any[] {
        return [
            authInfoMiddleware.run(),
            pageInfoMiddleware.run()
        ]
    }

    async getFollowers(req: Request, res: Response) {
        req.body.user_id = req.tokenInfo.payload.user_id;
        const result = await this.controller.getFollowers(req.body, req.pageInfo);
        this.onSuccessAsList(res, result, undefined, req.pageInfo);
    }

    getFollowingsMiddlewares(): any[] {
        return [
            authInfoMiddleware.run(),
            pageInfoMiddleware.run()
        ]
    }

    async getFollowings(req: Request, res: Response) {
        req.body.user_id = req.tokenInfo.payload.user_id;
        const result = await this.controller.getFollowings(req.body);
        this.onSuccessAsList(res, result, undefined, req.pageInfo);
    }

    getNewfeedsMiddlewares(): any[] {
        return [

        ]
    }

    async getNewfeeds(req: Request, res: Response) {
        const result = await this.controller.getNewfeeds(req.body);
        this.onSuccess(res, result);
    }

    followUserMiddlewares(): any[] {
        return [

        ]
    }

    async followUser(req: Request, res: Response) {
        const result = await this.controller.followUser(req.body);
        this.onSuccess(res, result);
    }

    unFollowUserMiddlewares(): any[] {
        return [

        ]
    }

    async unFollowUser(req: Request, res: Response) {
        const result = await this.controller.unFollowUser(req.body);
        this.onSuccess(res, result);
    }


}