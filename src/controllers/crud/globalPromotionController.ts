import { CrudController } from '../crudController'
import { ICrudOption, errorService ,globalPromotionService} from '@/services'


export class GlobalPromotionController extends CrudController<typeof globalPromotionService> {
    constructor() {
        super(globalPromotionService)
    }
    async statisticPromotion(params : any){
        return await this.service.statisticPromotion(params);
    }
    
}
    