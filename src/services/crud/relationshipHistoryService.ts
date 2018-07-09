import { CrudService, ICrudOption } from '../crudService.pg'
import { RelationshipHistory } from '@/models/tables'

export class RelationshipHistoryService extends CrudService<typeof RelationshipHistory> {
    constructor() {
        super(RelationshipHistory)
    }
    
}