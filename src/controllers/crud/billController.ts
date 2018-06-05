import { CrudController } from '../crudController'
import { ICrudOption, errorService ,billService} from '@/services'
import {
    ICreateOrder
} from '@/interfaces'

export class BillController extends CrudController<typeof billService> {
    constructor() {
        super(billService)
    }

    async createOrder(params: ICreateOrder){
        params.buyer_id = params.user_id
        return await this.service.createOrder(params);
    }
    
}
    