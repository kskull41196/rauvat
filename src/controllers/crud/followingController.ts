import { CrudController } from '../crudController'
import {
    ICrudOption,
    errorService,
    followingService,
    userService,
    postService
} from '@/services'


export class FollowingController extends CrudController<typeof followingService> {
    constructor() {
        super(followingService)
    }

    async getFollowers(params: any, option: ICrudOption) {
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
            ],
            limit: option.limit,
            offset: option.offset
        });
    }

    async getFollowings(params: any, option: ICrudOption) {
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
            ],
            limit: option.limit,
            offset: option.offset
        });
    }

    async getNewfeeds(params: any, option: ICrudOption) {
        let {
            user_id
        } = params;

        console.log(user_id);

        return await postService.getList({
            filter: {
                privacy: 'PUBLIC',
                user_id: {
                    $ne: user_id
                }
            },
            // include: [
            //     {
            //         association: 'followers',
            //         where: {
            //             user_id: user_id
            //         },
            //         attributes: []
            //     }
            // ],
            limit: option.limit,
            offset: option.offset
        });
    }

    async followUser(params: any) {
        return params;
    }

    async unFollowUser(params: any) {
        return params;
    }

}
