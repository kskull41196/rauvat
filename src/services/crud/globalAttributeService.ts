import { CrudService, ICrudOption } from '../crudService.pg'
import { GlobalAttribute } from '@/models/tables'

export class GlobalAttributeService extends CrudService<typeof GlobalAttribute> {
    constructor() {
        super(GlobalAttribute)
    }
    
}