import { CrudService, ICrudOption } from '../crudService.pg'
import { Store } from '@/models/tables'
import * as jsonexport from 'jsonexport'

export class StoreService extends CrudService<typeof Store> {
    constructor() {
        super(Store)
    }
    
}