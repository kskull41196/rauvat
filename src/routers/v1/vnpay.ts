import { CrudRouter } from '../crud'
import { errorService, tokenService } from '@/services'
import * as express from 'express'
import { Request, Response, BaseRouter } from '../base'
import {
    authController,
    userController,
    vnpayController
} from '@/controllers';
import {
    authInfoMiddleware,
    adminAuthInfoMiddleware
} from '@/middlewares'
import { VnpayController } from '@/controllers/vnpayController';
export default class AuthRouter extends BaseRouter {
    router: express.Router
    controller: VnpayController
    constructor() {
        super()
        this.router = express.Router()
        this.router.post('/create_payment_bill_url', this.createPaymentBillUrlMiddlewares(), this.route(this.createPaymentBillUrl));
        this.controller = vnpayController;
    }

    createPaymentBillUrlMiddlewares(): any[] {
        return [

        ]
    }

    async createPaymentBillUrl(req: Request, res: Response) {
        await this.validateJSON(req.body, {
            type: 'object',
            properties: {
                bank_code: {
                    type: 'string'
                },
                bill_id: {
                    type: 'string',
                    format: 'uuid'
                }
            },
            required: ['bill_id']
        })

        let ipAddr = req.headers['x-forwarded-for'] ||
            req.connection.remoteAddress ||
            req.socket.remoteAddress;
        req.body.ipAddr = ipAddr;

        const result = await this.controller.createPaymentBillUrl(req.body);
        this.onSuccess(res, result);
    }


} 