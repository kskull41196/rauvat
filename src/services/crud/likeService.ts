import { CrudService, ICrudOption } from '../crudService.pg'
import { Like } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class LikeService extends CrudService<typeof Like> {
    constructor() {
        super(Like)
    }
    
}