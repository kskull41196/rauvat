import { CrudController } from '../crudController'
import { ICrudOption, errorService ,userService} from '@/services'


export class UserCrudController extends CrudController<typeof userService> {
    constructor() {
        super(userService)
    }
    async check_login(params: any, option?: ICrudOption) {
        return await this.service.check_login(params, option)   
    }
    async createUser(params: any, option?: ICrudOption) {
        return await this.service.createUser(params, option)   
    }
    async getpassword(params: any, option?: ICrudOption) {
        return await this.service.getpassword(params, option)   
    }
}
    