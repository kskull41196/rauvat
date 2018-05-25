import { CrudController } from '../crudController'
import { ICrudOption, errorService ,globalPromotionService} from '@/services'


export class GlobalpromotionController extends CrudController<typeof globalPromotionService> {
    constructor() {
        super(globalPromotionService)
    }
    
}
    