import { CrudController } from '../crudController'
import { ICrudOption, errorService ,storeService} from '@/services'


export class StoreController extends CrudController<typeof storeService> {
    constructor() {
        super(storeService)
    }
    
}
    