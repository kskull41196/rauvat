import { CrudService, ICrudOption } from '../crudService.pg'
import { Paid_history } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class PaidHistoryService extends CrudService<typeof Paid_history> {
    constructor() {
        super(Paid_history)
    }
    
}