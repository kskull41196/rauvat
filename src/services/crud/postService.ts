import { CrudService, ICrudOption } from '../crudService.pg'
import { Post } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class PostService extends CrudService<typeof Post> {
    constructor() {
        super(Post)
    }
    
}