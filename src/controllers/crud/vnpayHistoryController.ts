import { CrudController } from '../crudController'
import { ICrudOption, errorService ,vnpayHistoryService} from '@/services'


export class VnpayHistoryController extends CrudController<typeof vnpayHistoryService> {
    constructor() {
        super(vnpayHistoryService)
    }
    
}
    