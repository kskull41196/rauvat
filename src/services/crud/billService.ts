import { CrudService, ICrudOption } from '../crudService.pg'
import { Bill } from '@/models/tables'

export class BillService extends CrudService<typeof Bill> {
    constructor() {
        super(Bill)
    }
    
}