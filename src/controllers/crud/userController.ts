import { CrudController } from '../crudController'
import { ICrudOption, errorService ,userService, billService} from '@/services'
import {
    sequelize,
    Sequelize
}
from '@/models/base'
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
    async checkUsername(params: any, option?: ICrudOption) {
        return await this.service.checkUsername(params, option)   
    }

    async getBills(user_id: any){
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
            offset: 2
        });
    }
}
    