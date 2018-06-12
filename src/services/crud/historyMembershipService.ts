import { CrudService, ICrudOption } from '../crudService.pg'
import { HistoryMembership } from '@/models/tables'

export class HistoryMembershipService extends CrudService<typeof HistoryMembership> {
    constructor() {
        super(HistoryMembership)
    }
    
}