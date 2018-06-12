import { CrudService, ICrudOption } from '../crudService.pg'
import { ProductGlobalAttribute } from '@/models/tables'

export class ProductGlobalAttributeService extends CrudService<typeof ProductGlobalAttribute> {
    constructor() {
        super(ProductGlobalAttribute)
    }
    
}