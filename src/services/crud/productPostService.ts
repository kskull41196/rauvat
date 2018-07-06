import { CrudService, ICrudOption } from '../crudService.pg'
import { ProductPost } from '@/models/tables'
import * as jsonexport from 'jsonexport'

export class ProductPostService extends CrudService<typeof ProductPost> {
    constructor() {
        super(ProductPost)
    }
    
}