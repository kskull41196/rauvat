import { CrudController } from '../crudController'
import { ICrudOption, errorService ,bill_activityService} from '@/services'


export class Bill_activityCrudController extends CrudController<typeof bill_activityService> {
    constructor() {
        super(bill_activityService)
    }
    
}
    