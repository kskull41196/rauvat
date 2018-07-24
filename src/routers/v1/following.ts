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
        this.router.post('/follow/:follower_id', this.followUserMiddlewares(), this.route(this.followUser));
        this.router.post('/unfollow/:follower_id', this.unFollowUserMiddlewares(), this.route(this.unFollowUser));
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
        const result = await this.controller.getFollowings(req.body, req.pageInfo);
        this.onSuccessAsList(res, result, undefined, req.pageInfo);
    }

    getNewfeedsMiddlewares(): any[] {
        return [
            authInfoMiddleware.run(),
            pageInfoMiddleware.run()
        ]
    }

    async getNewfeeds(req: Request, res: Response) {
        req.body.user_id = req.tokenInfo.payload.user_id;
        const result = await this.controller.getNewfeeds(req.body, req.pageInfo);
        this.onSuccessAsList(res, result, undefined, req.pageInfo);
    }

    followUserMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }

    async followUser(req: Request, res: Response) {
        req.params.user_id = req.tokenInfo.payload.user_id;

        await this.validateJSON(req.params, {
            type: 'object',
            properties: {
                user_id: {
                    type: 'string',
                    format: 'uuid'
                },
                follower_id: {
                    type: 'string',
                    format: 'uuid'
                }
            },
            additionalProperties: false
        });

        const result = await this.controller.followUser(req.params);
        this.onSuccess(res, result);
    }

    unFollowUserMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }

    async unFollowUser(req: Request, res: Response) {
        req.params.user_id = req.tokenInfo.payload.user_id;

        await this.validateJSON(req.params, {
            type: 'object',
            properties: {
                user_id: {
                    type: 'string',
                    format: 'uuid'
                },
                follower_id: {
                    type: 'string',
                    format: 'uuid'
                }
            },
            additionalProperties: false
        });
        const result = await this.controller.unFollowUser(req.params);
        this.onSuccess(res, result);
    }


}