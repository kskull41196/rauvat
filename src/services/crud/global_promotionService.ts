import { CrudService, ICrudOption } from '../crudService.pg'
import { Global_promotion } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class Global_promotionService extends CrudService<typeof Global_promotion> {
    constructor() {
        super(Global_promotion)
    }
    
}