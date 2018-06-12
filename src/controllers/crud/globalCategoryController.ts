import { CrudController } from '../crudController'
import { ICrudOption, errorService, globalCategoryService } from '@/services'


export class GlobalCategoryController extends CrudController<typeof globalCategoryService> {
    constructor() {
        super(globalCategoryService)
    }

    async addAttributes(params: any) {
        return await this.service.addAttributes(params);
    }

    async deleteAttributes(params: any) {
        return await this.service.deleteAttributes(params);
    }


}
