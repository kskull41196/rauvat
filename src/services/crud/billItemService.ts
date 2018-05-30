import { CrudService, ICrudOption } from '../crudService.pg'
import { BillItem } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class BillItemService extends CrudService<typeof BillItem> {
    constructor() {
        super(BillItem)
    }
    
}