import { CrudController } from '../crudController'
import { ICrudOption, errorService ,likeService} from '@/services'


export class LikeCrudController extends CrudController<typeof likeService> {
    constructor() {
        super(likeService)
    }
    
}
    