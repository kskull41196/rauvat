import { CrudController } from '../crudController'
import { ICrudOption, errorService ,walletService} from '@/services'


export class WalletController extends CrudController<typeof walletService> {
    constructor() {
        super(walletService)
    }
    async export(params: any, option?: ICrudOption) {
        return await this.service.export(params, option)   
    }
    
}
    