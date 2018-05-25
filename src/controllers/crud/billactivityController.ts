import { CrudController } from '../crudController'
import { ICrudOption, errorService ,billActivityService} from '@/services'


export class BillactivityController extends CrudController<typeof billActivityService> {
    constructor() {
        super(billActivityService)
    }
    
}
    