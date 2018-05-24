import { CrudService, ICrudOption } from '../crudService.pg'
import { Bill } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class BillService extends CrudService<typeof Bill> {
    constructor() {
        super(Bill)
    }
    
}