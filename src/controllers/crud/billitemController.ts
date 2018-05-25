import { CrudController } from '../crudController'
import { ICrudOption, errorService ,billItemService} from '@/services'


export class BillitemController extends CrudController<typeof billItemService> {
    constructor() {
        super(billItemService)
    }
    
}
    