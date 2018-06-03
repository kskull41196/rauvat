import { CrudController } from '../crudController'
import { ICrudOption, errorService ,userService} from '@/services'


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
}
    