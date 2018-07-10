import { CrudService, ICrudOption } from '../crudService.pg'
import { Following } from '@/models/tables'

export class FollowingService extends CrudService<typeof Following> {
    constructor() {
        super(Following)
    }
    
}