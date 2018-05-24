import { CrudController } from '../crudController'
import { ICrudOption, errorService ,productService} from '@/services'


export class ProductCrudController extends CrudController<typeof productService> {
    constructor() {
        super(productService)
    }
    
}
    