import { CrudService, ICrudOption } from '../crudService.pg'
import { Relationship } from '@/models/tables'

export class RelationshipService extends CrudService<typeof Relationship> {
    constructor() {
        super(Relationship)
    }
    
}