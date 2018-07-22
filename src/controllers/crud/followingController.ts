import { CrudController } from '../crudController'
import { ICrudOption, errorService, followingService, userService } from '@/services'


export class FollowingController extends CrudController<typeof followingService> {
    constructor() {
        super(followingService)
    }

    async getFollowers(params: any) {
        let {
            user_id
        } = params;

        return await userService.getList({
            filter: {

            },
            include: [
                {
                    association: 'followings',
                    where: {
                        user_id: user_id
                    },
                    attributes: []
                }
            ]
        });
    }

    async getFollowings(params: any) {
        let {
            user_id
        } = params;

        return await userService.getList({
            filter: {

            },
            include: [
                {
                    association: 'followers',
                    where: {
                        user_id: user_id
                    },
                    attributes: []
                }
            ]
        });
    }

    async getNewfeeds(params: any) {
        return params;
    }

    async followUser(params: any) {
        return params;
    }

    async unFollowUser(params: any) {
        return params;
    }

}
