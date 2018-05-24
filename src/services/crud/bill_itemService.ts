import { CrudService, ICrudOption } from '../crudService.pg'
import { Bill_item } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class Bill_itemService extends CrudService<typeof Bill_item> {
    constructor() {
        super(Bill_item)
    }
    
}