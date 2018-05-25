import { CrudController } from '../crudController'
import { ICrudOption, errorService ,globalAreaService} from '@/services'


export class GlobalareaController extends CrudController<typeof globalAreaService> {
    constructor() {
        super(globalAreaService)
    }
    async getItemWithParents(params: any, option?: ICrudOption) {
        return await this.service.getItemWithParents(params, option)
    }
}
    