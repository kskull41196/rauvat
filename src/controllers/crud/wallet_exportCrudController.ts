import { CrudController } from '../crudController'
import { ICrudOption, errorService ,wallet_exportService} from '@/services'


export class Wallet_exportCrudController extends CrudController<typeof wallet_exportService> {
    constructor() {
        super(wallet_exportService)
    }
    
}
    