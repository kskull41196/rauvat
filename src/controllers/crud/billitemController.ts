import { CrudController } from '../crudController'
import { ICrudOption, errorService, billItemService } from '@/services'


export class BillItemController extends CrudController<typeof billItemService> {
    constructor() {
        super(billItemService)
    }

}
