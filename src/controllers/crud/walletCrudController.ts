import { CrudController } from '../crudController'
import { ICrudOption, errorService ,walletService} from '@/services'


export class WalletCrudController extends CrudController<typeof walletService> {
    constructor() {
        super(walletService)
    }
    
}
    