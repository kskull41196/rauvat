import { CrudController } from '../crudController'
import { ICrudOption, errorService ,reportService} from '@/services'


export class ReportController extends CrudController<typeof reportService> {
    constructor() {
        super(reportService)
    }
    async updateCommentAdmin(params: any, option?: ICrudOption) {
        return await this.service.updateCommentAdmin(params, option)
    }
}
    