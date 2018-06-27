import { CrudController } from '../crudController'
import { ICrudOption, errorService ,postService} from '@/services'


export class PostController extends CrudController<typeof postService> {
    constructor() {
        super(postService)
    }
    async getPostWithHistory(params: any, option?: ICrudOption) {
        return await this.service.getPostWithHistory(params, option)
    }
}
    