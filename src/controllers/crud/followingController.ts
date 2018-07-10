import { CrudController } from '../crudController'
import { ICrudOption, errorService, followingService } from '@/services'


export class FollowingController extends CrudController<typeof followingService> {
    constructor() {
        super(followingService)
    }

}
