import { CrudController } from '../crudController'
import { ICrudOption, errorService ,productPostService} from '@/services'


export class ProductPostController extends CrudController<typeof productPostService> {
    constructor() {
        super(productPostService)
    }
    
}
    