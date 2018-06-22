import { CrudService, ICrudOption } from '../crudService.pg'
import { FavoritePost } from '@/models/tables'
import {
    errorService,
} from '@/services'
export class FavoritePostService extends CrudService<typeof FavoritePost> {
    constructor() {
        super(FavoritePost)
    }
    async addFavoritePost(params: any, option?: ICrudOption) {
        const resultFavoritePost: any = await this.model.count({
            where: {
                user_id: params.user_id,
                post_id: params.post_id
            }
        });
        if (resultFavoritePost == 1) {
            throw errorService.database.queryFail("Người dùng đã yêu thích bài viết này")
        } else {
            return await this.exec(
                this.model.create(params, this.applyCreateOptions(option))
            )
        }
    }
    async removeFavoritePost(params: any, option?: ICrudOption) {
        const resultFavoritePost: any = await this.model.count({
            where: {
                user_id: params.user_id,
                post_id: params.post_id
            }
        });
        if (resultFavoritePost == 0) {
            throw errorService.database.queryFail("Người dùng chưa yêu thích bài viết này")
        } else {
            const item = await this.exec(this.model.findOne({ where: { user_id: params.user_id, post_id: params.post_id } }), { allowNull: false })
            return await this.exec(item.destroy())
        }

    }
}