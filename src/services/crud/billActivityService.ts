import { CrudService, ICrudOption } from '../crudService.pg'
import { Bill_activity } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class BillActivityService extends CrudService<typeof Bill_activity> {
    constructor() {
        super(Bill_activity)
    }
    
}