import { CrudController } from '../crudController'
import { ICrudOption, errorService ,userSettingService} from '@/services'


export class UserSettingController extends CrudController<typeof userSettingService> {
    constructor() {
        super(userSettingService)
    }
    
}
    