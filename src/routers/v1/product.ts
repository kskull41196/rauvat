import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { productController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class ProductRouter extends CrudRouter<typeof productController> {
    constructor() {
        super(productController)

    }

    customRouting() {
        this.router.post('/filter', this.filterMiddlewares(), this.route(this.filter));
        this.router.post('/post_product', this.postProductMiddlewares(), this.route(this.postProduct));
        this.router.post('/post_quick_product', this.postQuickProductMiddlewares(), this.route(this.postQuickProduct));
    }
    getListMiddlewares(): any[] {
        return [queryMiddleware.run()]
    }
    getItemMiddlewares(): any[] {
        return [queryMiddleware.run()]
    }
    updateMiddlewares(): any[] {
        return [authInfoMiddleware.run()]
    }
    deleteMiddlewares(): any[] {
        return [authInfoMiddleware.run()]
    }
    deleteAllMiddlewares(): any[] {
        return [blockMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return []
        //for testing purpose, it should be queryMiddleware
    }

    filterMiddlewares(): any[] {
        return [
            queryMiddleware.run()
        ]
    }

    async filter(req: Request, res: Response) {
        await this.validateJSON(req.body, {
            type: 'object',
            properties: {
                name: {
                    type: 'string'
                },
                global_category_id: {
                    type: 'string',
                    format: 'uuid'
                },
                area_id: {
                    type: 'string',
                    format: 'uuid'
                },
                is_quick_post: {
                    type: 'boolean'
                },
                trade_type: {
                    type: 'string'
                },
                point: {
                    type: 'object',
                    properties: {
                        longitude: {
                            type: 'number'
                        },
                        latitude: {
                            type: 'number'
                        }
                    },
                    required: ['longitude', 'latitude']
                },
                radius: {
                    type: 'number'
                }
            }
        });
        const result = await this.controller.filter(req.body, req.queryInfo);
        this.onSuccessAsList(res, result, undefined, req.queryInfo);
    }

    postProductMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }

    async postProduct(req: Request, res: Response) {
        req.body.user_id = req.tokenInfo.payload.user_id
        await this.validateJSON(req.body, {
            type: 'object',
            properties: {
                name: {
                    type: 'string'
                },
                price: {
                    type: 'number'
                },
                user_id: {
                    type: 'string',
                    format: 'uuid'
                },
                short_description: {
                    type: 'string'
                },
                description: {
                    type: 'string'
                },
                global_category_id: {
                    type: 'string',
                    format: 'uuid'
                },
                global_area_id: {
                    type: 'string',
                    format: 'uuid'
                },
                thumb: {
                    type: 'string',
                    format: 'url'
                },
                list_image: {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                is_from_store: {
                    type: 'boolean'
                },
                address: {
                    type: 'string'
                },
                longitude: {
                    type: 'number',
                    minimum: 0
                },
                lattiude: {
                    type: 'number',
                    minimum: 0
                },
                duration: {
                    type: 'number',
                    minimum: 0
                },
                is_limit_duration: {
                    type: 'boolean'
                },
                is_buy: {
                    type: 'boolean'
                },
                attribute: {
                    type: 'object'
                }
            },
            required: ['name', 'price', 'description', 'global_category_id', 'thumb', 'is_from_store', 'attribute', 'global_area_id', 'address', 'longitude', 'lattitude', 'duration', 'is_limit_duration', 'is_buy']
        });

        const result = await this.controller.postProduct(req.body);
        this.onSuccess(res, result)
    }

    postQuickProductMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }

    async postQuickProduct(req: Request, res: Response) {
        req.body.user_id = req.tokenInfo.payload.user_id
        await this.validateJSON(req.body, {
            type: 'object',
            properties: {
                name: {
                    type: 'string'
                },
                price: {
                    type: 'number'
                },
                user_id: {
                    type: 'string',
                    format: 'uuid'
                },
                short_description: {
                    type: 'string'
                },
                description: {
                    type: 'string'
                },
                global_category_id: {
                    type: 'string',
                    format: 'uuid'
                },
                global_area_id: {
                    type: 'string',
                    format: 'uuid'
                },
                thumb: {
                    type: 'string',
                    format: 'url'
                },
                list_image: {
                    type: 'array',
                    items: {
                        type: 'string'
                    }
                },
                is_from_store: {
                    type: 'boolean'
                },
                address: {
                    type: 'string'
                },
                longitude: {
                    type: 'number',
                    minimum: 0
                },
                lattiude: {
                    type: 'number',
                    minimum: 0
                },
                duration: {
                    type: 'number',
                    minimum: 0
                },
                is_limit_duration: {
                    type: 'boolean'
                },
                is_buy: {
                    type: 'boolean'
                },
                attribute: {
                    type: 'object'
                }
            },
            required: ['name', 'price', 'description', 'global_category_id', 'thumb', 'is_from_store', 'attribute', 'global_area_id', 'address', 'longitude', 'latitude', 'duration', 'is_limit_duration', 'is_buy']
        });

        const result = await this.controller.postQuickProduct(req.body);
        this.onSuccess(res, result)

    }

}