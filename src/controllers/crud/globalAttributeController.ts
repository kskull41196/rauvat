import { CrudController } from '../crudController'
import { ICrudOption, errorService ,globalAttributeService} from '@/services'


export class GlobalAttributeController extends CrudController<typeof globalAttributeService> {
    constructor() {
        super(globalAttributeService)
    }
    
}
    