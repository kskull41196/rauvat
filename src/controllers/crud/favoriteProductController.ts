import { CrudController } from '../crudController'
import { ICrudOption, errorService ,favoriteProductService} from '@/services'


export class FavoriteProductController extends CrudController<typeof favoriteProductService> {
    constructor() {
        super(favoriteProductService)
    }
    
}
    