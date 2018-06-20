import { CrudService, ICrudOption } from '../crudService.pg'
import { FavoritePost } from '@/models/tables'

export class FavoritePostService extends CrudService<typeof FavoritePost> {
    constructor() {
        super(FavoritePost)
    }
    
}