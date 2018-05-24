import { CrudService, ICrudOption } from '../crudService.pg'
import { Rate } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class RateService extends CrudService<typeof Rate> {
    constructor() {
        super(Rate)
    }
    
}