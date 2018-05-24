import { CrudController } from '../crudController'
import { ICrudOption, errorService ,billService} from '@/services'


export class BillCrudController extends CrudController<typeof billService> {
    constructor() {
        super(billService)
    }
    
}
    