import { CrudController } from '../crudController'
import { ICrudOption, errorService ,walletExportService} from '@/services'


export class WalletexportController extends CrudController<typeof walletExportService> {
    constructor() {
        super(walletExportService)
    }
    
}
    