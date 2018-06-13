import { CrudController } from '../crudController'
import { ICrudOption, errorService ,walletExportService} from '@/services'


export class WalletExportController extends CrudController<typeof walletExportService> {
    constructor() {
        super(walletExportService)
    }
    
}
    