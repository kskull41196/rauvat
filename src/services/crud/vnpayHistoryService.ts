import { CrudService, ICrudOption } from '../crudService.pg'
import { VnpayHistory } from '@/models/tables'
export class VnpayHistoryService extends CrudService<typeof VnpayHistory> {
    constructor() {
        super(VnpayHistory)
    }
    
}