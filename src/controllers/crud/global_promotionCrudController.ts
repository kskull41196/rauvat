import { CrudController } from '../crudController'
import { ICrudOption, errorService ,global_promotionService} from '@/services'


export class Global_promotionCrudController extends CrudController<typeof global_promotionService> {
    constructor() {
        super(global_promotionService)
    }
    
}
    