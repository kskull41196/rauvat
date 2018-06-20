import { CrudController } from '../crudController'
import { ICrudOption, errorService ,favoritePostService} from '@/services'


export class FavoritePostController extends CrudController<typeof favoritePostService> {
    constructor() {
        super(favoritePostService)
    }
    
}
    