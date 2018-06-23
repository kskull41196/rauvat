import { CrudController } from '../crudController'
import { ICrudOption, errorService ,notificationService} from '@/services'


export class NotificationController extends CrudController<typeof notificationService> {
    constructor() {
        super(notificationService)
    }
    
}
    