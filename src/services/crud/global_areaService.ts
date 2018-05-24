import { CrudService, ICrudOption } from '../crudService.pg'
import { Global_area } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class Global_areaService extends CrudService<typeof Global_area> {
    constructor() {
        super(Global_area)
    }
    
}