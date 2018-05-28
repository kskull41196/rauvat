import { CrudController } from '../crudController'
import { ICrudOption, errorService ,paidHistoryService} from '@/services'


export class PaidHistoryController extends CrudController<typeof paidHistoryService> {
    constructor() {
        super(paidHistoryService)
    }
    
}
    