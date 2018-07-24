import { CrudController } from '../crudController'
import { ICrudOption, errorService ,exportRequestService} from '@/services'


export class ExportRequestController extends CrudController<typeof exportRequestService> {
    constructor() {
        super(exportRequestService)
    }
    
}
    