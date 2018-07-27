import { CrudController } from '../crudController'
import { ICrudOption, errorService ,exportRequestService} from '@/services'


export class ExportRequestController extends CrudController<typeof exportRequestService> {
    constructor() {
        super(exportRequestService)
    }
    async execute(params: any, option?: ICrudOption) {
        params.employee_id = params.employee_id
        return await this.service.execute(params, option)
    }
}
    