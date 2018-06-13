import { CrudController } from '../crudController'
import { ICrudOption, errorService ,walletImportService} from '@/services'


export class WalletImportController extends CrudController<typeof walletImportService> {
    constructor() {
        super(walletImportService)
    }
    
}
    