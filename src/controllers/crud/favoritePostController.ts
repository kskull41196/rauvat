import { CrudController } from '../crudController'
import { ICrudOption, errorService ,favoritePostService} from '@/services'


export class FavoritePostController extends CrudController<typeof favoritePostService> {
    constructor() {
        super(favoritePostService)
    }
    async addFavoritePost(params: any, option?: ICrudOption) {
        return await this.service.addFavoritePost(params, option)
    }
    async removeFavoritePost(params: any, option?: ICrudOption) {
        return await this.service.removeFavoritePost(params, option)
    }
}
    