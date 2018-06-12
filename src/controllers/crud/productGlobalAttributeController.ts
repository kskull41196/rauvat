import { CrudController } from '../crudController'
import { ICrudOption, errorService, productGlobalAttributeService } from '@/services'


export class ProductGlobalAttributeController extends CrudController<typeof productGlobalAttributeService> {
    constructor() {
        super(productGlobalAttributeService)
    }

}
