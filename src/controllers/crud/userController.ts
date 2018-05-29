import { CrudController } from '../crudController'
import { ICrudOption, errorService ,userService} from '@/services'


export class UserController extends CrudController<typeof userService> {
    constructor() {
        super(userService)
    }
    async checkLogin(params: any, option?: ICrudOption) {
        return await this.service.checkLogin(params, option)   
    }
    async createUser(params: any, option?: ICrudOption) {
        return await this.service.createUser(params, option)   
    }
    async getPassword(params: any, option?: ICrudOption) {
        return await this.service.getPassword(params, option)   
    }
}
    