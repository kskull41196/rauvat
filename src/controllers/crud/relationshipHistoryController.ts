import { CrudController } from '../crudController'
import { ICrudOption, errorService, relationshipHistoryService } from '@/services'


export class RelationshipHistoryController extends CrudController<typeof relationshipHistoryService> {
    constructor() {
        super(relationshipHistoryService)
    }

}
