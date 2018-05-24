import { CrudService, ICrudOption } from '../crudService.pg'
import { Product } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'
export class ProductService extends CrudService<typeof Product> {
    constructor() {
        super(Product)
    }
    
}