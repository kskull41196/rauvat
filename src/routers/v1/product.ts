import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { productController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware,adminAuthInfoMiddleware } from '@/middlewares'

export default class ProductRouter extends CrudRouter<typeof productController> {
    constructor() {
        super(productController)

    }

    customRouting() {
        this.router.post('/filter', this.filterMiddlewares(), this.route(this.filter));
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
        return [adminAuthInfoMiddleware.run()]
    }
    deleteAllMiddlewares(): any[] {
        return [adminAuthInfoMiddleware.run()]
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
}