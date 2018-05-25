import { CrudController } from '../crudController'
import { ICrudOption, errorService ,global_areaService} from '@/services'


export class Global_areaCrudController extends CrudController<typeof global_areaService> {
    constructor() {
        super(global_areaService)
    }
    async getItemWithParents(params: any, option?: ICrudOption) {
        return await this.service.getItemWithParents(params, option)
    }
}
    