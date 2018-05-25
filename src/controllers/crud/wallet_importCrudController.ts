import { CrudController } from '../crudController'
import { ICrudOption, errorService ,wallet_importService} from '@/services'


export class Wallet_importCrudController extends CrudController<typeof wallet_importService> {
    constructor() {
        super(wallet_importService)
    }
    
}
    