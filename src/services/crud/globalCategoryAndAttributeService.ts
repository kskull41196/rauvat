import { CrudService, ICrudOption } from '../crudService.pg'
import { GlobalCategoryAndAttribute } from '@/models/tables'

export class GlobalCategoryAndAttributeService extends CrudService<typeof GlobalCategoryAndAttribute> {
    constructor() {
        super(GlobalCategoryAndAttribute)
    }
    
}