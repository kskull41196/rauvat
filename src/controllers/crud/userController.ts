import { CrudController } from '../crudController'

import { ICrudOption, errorService, userService, billService } from '@/services'
import {
    sequelize,
    Sequelize
} from '@/models/base'

export class UserController extends CrudController<typeof userService> {
    constructor() {
        super(userService)
    }
    async checkLogin(params: any, option?: ICrudOption) {
        return await this.service.checkLogin(params, option)
    }
    async getPassword(params: any, option?: ICrudOption) {
        return await this.service.getPassword(params, option)
    }
    async sendNotification(params: any, option?: ICrudOption) {
        return await this.service.sendNotification(params, option)
    }
    async updateRegistrationId(params: any, option?: ICrudOption) {
        return await this.service.updateRegistrationId(params, option)
    }
    async checkUsername(params: any, option?: ICrudOption) {
        return await this.service.checkUsername(params, option)
    }
    async getBills(user_id: any, option?: ICrudOption) {
        return await billService.getList({
            filter: {
                $or: [
                    {
                        buyer_id: user_id
                    },
                    {
                        seller_id: user_id
                    }
                ]
            },
            include: [
                {
                    association: 'activity'
                },
                {
                    association: 'items'
                }
            ],
            attributes: {
                include: [
                    [sequelize.where(sequelize.col('buyer_id'), user_id), 'is_buy']
                ]
            },
            offset: option.offset,
            limit: option.limit
        });
    }

    async upgrade(params: {
        user_id: string,
        user_type: string
    }) {
        return await this.service.upgrade(params);
    }

    async downgrade(params: {
        user_id: string
    }) {
        return await this.service.downgrade(params);
    }

}
