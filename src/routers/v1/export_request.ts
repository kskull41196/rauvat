import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { exportRequestController } from '@/controllers'
import { authInfoMiddleware, adminAuthInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class ExportRequestRouter extends CrudRouter<typeof exportRequestController> {
    constructor() {
        super(exportRequestController)

    }
    customRouting() {
        this.router.post('/request', this.createMiddlewares(), this.route(this.request));
        this.router.put('/execute',this.executeMiddlewares() ,this.route(this.execute));
    }

    async execute(req: Request, res: Response) {
        req.body = Object.assign(req.body, req.tokenInfo.payload);
        await this.validateJSON(req.body, {
            type: 'object',
            properties: {
                items: {
                    type: 'array',
                    items: {
                        type: 'object',
                        properties: {
                            export_request_id: {
                                type: 'string',
                                format: 'uuid'
                            }
                        },
                        required: ['export_request_id']
                    },
                    minItems: 1
                }
            }
        })
        const result = await this.controller.execute(req.body);
        this.onSuccess(res, result)
    }
    async request(req: Request, res: Response) {
        req.body.user_id = req.tokenInfo.payload.user_id
        req.body.state = "NONE"
        const result = await this.controller.create(req.body)
        this.onSuccess(res, result)
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
        return [authInfoMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [authInfoMiddleware.run()]
    }
    executeMiddlewares(): any[] {
        return [authInfoMiddleware.run(), adminAuthInfoMiddleware.run()]
    }
}