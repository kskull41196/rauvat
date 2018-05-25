import { CrudController } from '../crudController'
import { ICrudOption, errorService ,rateService} from '@/services'


export class RateController extends CrudController<typeof rateService> {
    constructor() {
        super(rateService)
    }
    
}
    