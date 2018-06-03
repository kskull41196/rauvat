import { CrudController } from '../crudController'
import { ICrudOption, errorService ,globalCategoryService} from '@/services'


export class GlobalCategoryController extends CrudController<typeof globalCategoryService> {
    constructor() {
        super(globalCategoryService)
    }
    
}
    