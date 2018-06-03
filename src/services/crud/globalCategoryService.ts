import { CrudService, ICrudOption } from '../crudService.pg'
import { GlobalCategory } from '@/models/tables'

export class GlobalCategoryService extends CrudService<typeof GlobalCategory> {
    constructor() {
        super(GlobalCategory)
    }
    
}