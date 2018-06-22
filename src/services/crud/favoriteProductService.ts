import { CrudService, ICrudOption } from '../crudService.pg'
import { FavoriteProduct } from '@/models/tables'
import {
    errorService,
} from '@/services'
export class FavoriteProductService extends CrudService<typeof FavoriteProduct> {
    constructor() {
        super(FavoriteProduct)
    }
    async addFavoriteProduct(params: any, option?: ICrudOption) {
        const resultFavoriteProduct: any = await this.model.count({
            where: {
                user_id: params.user_id,
                product_id: params.product_id
            }
        });
        if (resultFavoriteProduct == 1) {
            throw errorService.database.queryFail("Người dùng đã yêu thích sản phẩm này")
        } else {
            return await this.exec(
                this.model.create(params, this.applyCreateOptions(option))
            )
        }
    }
    async removeFavoriteProduct(params: any, option?: ICrudOption) {
        const resultFavoriteProduct: any = await this.model.count({
            where: {
                user_id: params.user_id,
                product_id: params.product_id
            }
        });
        if (resultFavoriteProduct == 0) {
            throw errorService.database.queryFail("Người dùng chưa yêu thích sản phẩm này")
        } else {
            const item = await this.exec(this.model.findOne({ where: { user_id: params.user_id, product_id: params.product_id } }), { allowNull: false })
            return await this.exec(item.destroy())
        }

    }
}