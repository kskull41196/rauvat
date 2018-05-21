import { CrudService, ICrudOption } from '../crudService.pg'
import { Post } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'
const CONVERT_MD5 = 'md5'
const ENCODING= 'hex'
export class PostService extends CrudService<typeof Post> {
    constructor() {
        super(Post)
    }
    
}