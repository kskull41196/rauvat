import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { employeeController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'

export default class EmployeeRouter extends CrudRouter<typeof employeeController> {
    constructor() {
        super(employeeController)

    }

    customRouting(){
        this.router.post('/create_account', this.route(this.createAccount));
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
        return [blockMiddleware.run()]
    }
    deleteAllMiddlewares(): any[] {
        return [blockMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [blockMiddleware.run()]
    }

    async createAccount(req: Request, res: Response){
        await this.validateJSON(req.body, {
            type: 'object',
            properties: {
                email: {
                    type: 'string'
                },
                password: {
                    type: 'string'
                },
                fullname: {
                    type: 'string'
                },
                avatar: {
                    type: 'string'
                },
                phone: {
                    type: 'string'
                }
            },
            required: ['email', 'password', 'fullname', 'phone']
        });
        const result = await this.controller.createAccount(req.body);

        this.onSuccess(res, result)
    }
}