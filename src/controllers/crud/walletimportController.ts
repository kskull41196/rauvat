import { CrudController } from '../crudController'
import { ICrudOption, errorService ,walletImportService} from '@/services'


export class WalletimportController extends CrudController<typeof walletImportService> {
    constructor() {
        super(walletImportService)
    }
    
}
    