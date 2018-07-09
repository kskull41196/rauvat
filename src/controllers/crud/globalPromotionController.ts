import { CrudController } from '../crudController'
import { ICrudOption, errorService ,globalPromotionService} from '@/services'


export class GlobalPromotionController extends CrudController<typeof globalPromotionService> {
    constructor() {
        super(globalPromotionService)
    }
    async statisticGeneral(params : any){
        return await this.service.statisticGeneral(params);
    }
    
}
    