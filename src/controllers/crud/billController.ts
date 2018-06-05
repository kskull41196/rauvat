import { CrudController } from '../crudController'
import {
    ICrudOption,
    errorService,
    billService,
    billActivityService
} from '@/services'
import {
    ICreateOrder
} from '@/interfaces'

export class BillController extends CrudController<typeof billService> {
    constructor() {
        super(billService)
    }

    async createOrder(params: ICreateOrder) {
        params.buyer_id = params.user_id
        return await this.service.createOrder(params);
    }

    async getBill(option?: {
        user_id: string,
        id: string
    }) {
        return await this.service.getBill(option)
    }

    async getBillActivities(params: {
        user_id: string,
        id: string
    }) {
        return await billActivityService.getList({
            filter: {
                bill_id: params.id
            },
            include: [
                {
                    association: 'bill',
                    where: {
                        $or: [
                            {
                                seller_id: params.user_id
                            }, {
                                buyer_id: params.user_id
                            }
                        ]
                    },
                    attributes: []
                }
            ]
        })
    }

}
