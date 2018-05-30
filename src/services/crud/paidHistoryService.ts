import { CrudService, ICrudOption } from '../crudService.pg'
import { PaidHistory } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class PaidHistoryService extends CrudService<typeof PaidHistory> {
    constructor() {
        super(PaidHistory)
    }
    
}