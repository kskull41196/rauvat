import { CrudController } from '../crudController'
import { ICrudOption, errorService ,storeService} from '@/services'


export class StoreController extends CrudController<typeof storeService> {
    constructor() {
        super(storeService)
    }
    async statisticTrading(params : any){
        return await this.service.statisticTrading(params);
    }
}
    