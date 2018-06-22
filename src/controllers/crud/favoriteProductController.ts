import { CrudController } from '../crudController'
import { ICrudOption, errorService ,favoriteProductService} from '@/services'


export class FavoriteProductController extends CrudController<typeof favoriteProductService> {
    constructor() {
        super(favoriteProductService)
    }
    async addFavoriteProduct(params: any, option?: ICrudOption) {
        return await this.service.addFavoriteProduct(params, option)
    }
    async removeFavoriteProduct(params: any, option?: ICrudOption) {
        return await this.service.removeFavoriteProduct(params, option)
    }
}
    