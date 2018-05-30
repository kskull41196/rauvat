import { CrudService, ICrudOption } from '../crudService.pg'
import { BillActivity } from '@/models/tables'

export class BillActivityService extends CrudService<typeof BillActivity> {
    constructor() {
        super(BillActivity)
    }
    
}