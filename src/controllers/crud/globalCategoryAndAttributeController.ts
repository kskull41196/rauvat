import { CrudController } from '../crudController'
import { ICrudOption, errorService ,globalCategoryAndAttributeService} from '@/services'


export class GlobalCategoryAndAttributeController extends CrudController<typeof globalCategoryAndAttributeService> {
    constructor() {
        super(globalCategoryAndAttributeService)
    }
    
}
    