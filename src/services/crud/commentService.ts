import { CrudService, ICrudOption } from '../crudService.pg'
import { Comment } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class CommentService extends CrudService<typeof Comment> {
    constructor() {
        super(Comment)
    }
    
}