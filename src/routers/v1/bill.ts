import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { billController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'
import { auth } from 'firebase-admin';

export default class BillRouter extends CrudRouter<typeof billController> {
    constructor() {
        super(billController)

    }

    customRouting() {
        this.router.post('/order', this.createOrderMiddlewares(), this.route(this.createOrder));
        this.router.get('/:id/activities', this.getBillActivitiesMiddlewares(), this.route(this.getBillActivities));
        this.router.get('/:id/items', this.getBillItemsMiddlewares(), this.route(this.getBillItems));
        this.router.post('/:bill_id/ordered', this.changeOrderedStatusMiddlewares(), this.route(this.changeOrderedStatus));
        this.router.post('/:bill_id/successed', this.changeSuccessedStatusMiddlewares(), this.route(this.changeSuccessedStatus));
        this.router.post('/:bill_id/failed', this.changeFailedStatusMiddlewares(), this.route(this.changeFailedStatus));
    }

    createOrderMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }

    async createOrder(req: Request, res: Response) {
        req.body = Object.assign(req.body, req.tokenInfo.payload);

        await this.validateJSON(req.body, {
            type: 'object',
            properties: {
                seller_id: {
                    type: 'string',
                    format: 'uuid'
                },
                user_id: {
                    type: 'string',
                    format: 'uuid'
                },
                address: {
                    type: 'string'
                },
                longitude: {
                    type: 'number',
                    minimum: 0
                },
                lattitude: {
                    type: 'number',
                    minimum: 0
                },
                note: {
                    type: 'string'
                },
                items: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            product_id: {
                                type: 'string',
                                format: 'uuid'
                            },
                            amount: {
                                type: 'integer',
                                minimum: 1
                            }
                        },
                        required: ['product_id', 'amount']
                    },
                    minItems: 1
                }
            },
            required: ['seller_id', 'user_id', 'address', 'longitude', 'lattitude', 'items']
        });

        const result = await this.controller.createOrder(req.body);
        this.onSuccess(res, result)
    }



    // getListMiddlewares(): any[] {
    //     return [queryMiddleware.run()]
    // }
    getItemMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }

    async getItem(req: Request, res: Response) {
        req.params.user_id = req.tokenInfo.payload.user_id;

        await this.validateJSON(req.params, {
            type: 'object',
            properties: {
                user_id: {
                    type: 'string',
                    format: 'uuid'
                },
                id: {
                    type: 'string',
                    format: 'uuid'
                }
            },
            required: ['user_id', 'id']
        })

        const result = await this.controller.getBill(req.params)
        this.onSuccess(res, result)
    }

    getBillActivitiesMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }

    async getBillActivities(req: Request, res: Response) {
        req.params.user_id = req.tokenInfo.payload.user_id;

        await this.validateJSON(req.params, {
            type: 'object',
            properties: {
                user_id: {
                    type: 'string',
                    format: 'uuid'
                },
                id: {
                    type: 'string',
                    format: 'uuid'
                }
            },
            required: ['user_id', 'id']
        })

        const result = await this.controller.getBillActivities(req.params);
        this.onSuccess(res, result);
    }

    getBillItemsMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }

    async getBillItems(req: Request, res: Response) {
        req.params.user_id = req.tokenInfo.payload.user_id;
        await this.validateJSON(req.params, {
            type: 'object',
            properties: {
                user_id: {
                    type: 'string',
                    format: 'uuid'
                },
                id: {
                    type: 'string',
                    format: 'uuid'
                }
            },
            required: ['user_id', 'id']
        })

        const result = await this.controller.getBillItems(req.params);
        this.onSuccess(res, result);
    }

    changeOrderedStatusMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }

    async changeOrderedStatus(req: Request, res: Response) {
        req.params.user_id = req.tokenInfo.payload.user_id;
        await this.validateJSON(req.params, {
            type: 'object',
            properties: {
                bill_id: {
                    type: 'string',
                    format: 'uuid'
                }
            },
            required: ['bill_id']
        })
        const result = await this.controller.changeOrderedStatus(req.params);
        this.onSuccess(res, result);
    }

    changeSuccessedStatusMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }

    async changeSuccessedStatus(req: Request, res: Response) {
        req.params.user_id = req.tokenInfo.payload.user_id;
        await this.validateJSON(req.params, {
            type: 'object',
            properties: {
                bill_id: {
                    type: 'string',
                    format: 'uuid'
                }
            },
            required: ['bill_id']
        })
        const result = await this.controller.changeSuccessedStatus(req.params);
        this.onSuccess(res, result);
    }

    changeFailedStatusMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }

    async changeFailedStatus(req: Request, res: Response) {
        req.params.user_id = req.tokenInfo.payload.user_id;
        await this.validateJSON(req.params, {
            type: 'object',
            properties: {
                bill_id: {
                    type: 'string',
                    format: 'uuid'
                }
            },
            required: ['bill_id']
        })
        const result = await this.controller.changeFailedStatus(req.params);
        this.onSuccess(res, result);
    }

    // updateMiddlewares(): any[] {
    //     return [authInfoMiddleware.run()]
    // }
    // deleteMiddlewares(): any[] {
    //     return [authInfoMiddleware.run()]
    // }
    // deleteAllMiddlewares(): any[] {
    //     return [blockMiddleware.run()]
    // }
    // createMiddlewares(): any[] {
    //     return [authInfoMiddleware.run()]
    // }
}