import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { relationshipHistoryController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class RelationshipHistory extends CrudRouter<typeof relationshipHistoryController> {
    constructor() {
        super(relationshipHistoryController)

    }

    customRouting() {
        this.router.post('/friend_request/:receiver_id', this.friendRequestMiddlewares(), this.route(this.friendRequest));
        this.router.post('/friend_request/:receiver_id/accepted', this.acceptFriendRequestMiddlewares(), this.route(this.acceptFriendRequest));
        this.router.post('/unfriend/:receiver_id', this.unfriendMiddlewares(), this.route(this.unfriend));
        this.router.post('/block/:receiver_id', this.blockMiddlewares(), this.route(this.block));
    }

    friendRequestMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }

    async friendRequest(req: Request, res: Response) {
        req.params.user_id = req.tokenInfo.payload.user_id;
        await this.validateJSON(req.params, {
            type: 'object',
            properties: {
                user_id: {
                    type: 'string',
                    format: 'uuid'
                },
                receiver_id: {
                    type: 'string',
                    format: 'uuid'
                }
            },
            additionalProperties: false,
            required: ['user_id', 'receiver_id']
        })

        const result = await this.controller.friendRequest(req.params);
        this.onSuccess(res, result);
    }

    acceptFriendRequestMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }

    async acceptFriendRequest(req: Request, res: Response) {
        req.params.user_id = req.tokenInfo.payload.user_id;
        await this.validateJSON(req.params, {
            type: 'object',
            properties: {
                user_id: {
                    type: 'string',
                    format: 'uuid'
                },
                receiver_id: {
                    type: 'string',
                    format: 'uuid'
                }
            },
            additionalProperties: false,
            required: ['user_id', 'receiver_id']
        })

        const result = await this.controller.acceptFriendRequest(req.params);
        this.onSuccess(res, result);
    }

    unfriendMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }

    async unfriend(req: Request, res: Response) {
        req.params.user_id = req.tokenInfo.payload.user_id;
        await this.validateJSON(req.params, {
            type: 'object',
            properties: {
                user_id: {
                    type: 'string',
                    format: 'uuid'
                },
                receiver_id: {
                    type: 'string',
                    format: 'uuid'
                }
            },
            additionalProperties: false,
            required: ['user_id', 'receiver_id']
        })

        const result = await this.controller.unfriend(req.params);
        this.onSuccess(res, result);
    }

    blockMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }

    async block(req: Request, res: Response) {
        req.params.user_id = req.tokenInfo.payload.user_id;
        await this.validateJSON(req.params, {
            type: 'object',
            properties: {
                user_id: {
                    type: 'string',
                    format: 'uuid'
                },
                receiver_id: {
                    type: 'string',
                    format: 'uuid'
                }
            },
            additionalProperties: false,
            required: ['user_id', 'receiver_id']
        })

        const result = await this.controller.block(req.params);
        this.onSuccess(res, result);
    }

}