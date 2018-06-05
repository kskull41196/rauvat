import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { billController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class BillRouter extends CrudRouter<typeof billController> {
    constructor() {
        super(billController)

    }

    customRouting() {
        this.router.post('/order', this.createOrderMiddlewares(), this.route(this.createOrder));
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