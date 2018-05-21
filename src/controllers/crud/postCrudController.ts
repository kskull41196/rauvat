import { CrudController } from '../crudController'
import { ICrudOption, errorService ,postService} from '@/services'


export class PostCrudController extends CrudController<typeof postService> {
    constructor() {
        super(postService)
    }
    
}
    