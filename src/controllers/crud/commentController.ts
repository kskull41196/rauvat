import { CrudController } from '../crudController'
import { ICrudOption, errorService ,commentService} from '@/services'


export class CommentController extends CrudController<typeof commentService> {
    constructor() {
        super(commentService)
    }
    
}
    