import { CrudController } from '../crudController'
import { ICrudOption, errorService, historyMembershipService } from '@/services'


export class HistoryMembershipController extends CrudController<typeof historyMembershipService> {
    constructor() {
        super(historyMembershipService)
    }

}
