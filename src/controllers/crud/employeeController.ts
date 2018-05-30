import { CrudController } from '../crudController'
import { ICrudOption, errorService ,employeeService} from '@/services'

import {
    ICreateAccountEmployee
} from '@/interfaces'


export class EmployeeController extends CrudController<typeof employeeService> {
    constructor() {
        super(employeeService)
    }

    async createAccount(params: ICreateAccountEmployee){
        return await this.service.createAccount(params);
    }
    
}
    