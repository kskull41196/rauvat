import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { globalCategoryController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class GlobalCategoryRouter extends CrudRouter<typeof globalCategoryController> {
    constructor() {
        super(globalCategoryController)

    }

    customRouting() {
        this.router.post('/:category_id/attributes', this.addAttributesMiddlewares(), this.route(this.addAttributes));
        this.router.delete('/:category_id/attribute/:attribute_id', this.deleteAttributesMiddlewares(), this.route(this.deleteAttributes));
    }

    addAttributesMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }

    async addAttributes(req: Request, res: Response) {
        req.body = Object.assign(req.body, req.params);

        await this.validateJSON(req.body, {
            type: 'object',
            properties: {
                attribute: {
                    enum: ['STRING', 'NUMBER', 'BOOLEAN', 'JSON', 'TIMESTAMP']
                },
                name: {
                    type: 'string'
                },
                value: {
                    type: 'string'
                },
                category_id: {
                    type: 'string',
                    format: 'uuid'
                }
            },
            required: ['attribute', 'name', 'value', 'category_id']
        })

        const result = await this.controller.addAttributes(req.body);
        this.onSuccess(res, result);
    }

    deleteAttributesMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }

    async deleteAttributes(req: Request, res: Response) {
        await this.validateJSON(req.params, {
            type: 'object',
            properties: {
                category_id: {
                    type: 'string',
                    format: 'uuid'
                },
                attribute_id: {
                    type: 'string',
                    format: 'uuid'
                }
            },
            required: ['category_id', 'attribute_id']
        });
        const result = await this.controller.deleteAttributes(req.params);
        this.onSuccess(res, result)
    }


    // getListMiddlewares(): any[] {
    //     return [queryMiddleware.run()]
    // }
    // getItemMiddlewares(): any[] {
    //     return [queryMiddleware.run()]
    // }
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