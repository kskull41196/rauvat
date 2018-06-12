import { CrudController } from '../crudController'
import { ICrudOption, errorService ,billService} from '@/services'


export class BillController extends CrudController<typeof billService> {
    constructor() {
        super(billService)
    }
    
}
    