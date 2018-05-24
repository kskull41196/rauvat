import { CrudController } from '../crudController'
import { ICrudOption, errorService ,bill_itemService} from '@/services'


export class Bill_itemCrudController extends CrudController<typeof bill_itemService> {
    constructor() {
        super(bill_itemService)
    }
    
}
    