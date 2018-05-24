import { CrudController } from '../crudController'
import { ICrudOption, errorService ,commentService} from '@/services'


export class CommentCrudController extends CrudController<typeof commentService> {
    constructor() {
        super(commentService)
    }
    
}
    