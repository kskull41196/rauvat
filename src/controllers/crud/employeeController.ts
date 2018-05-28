import { CrudController } from '../crudController'
import { ICrudOption, errorService ,employeeService} from '@/services'


export class EmployeeController extends CrudController<typeof employeeService> {
    constructor() {
        super(employeeService)
    }
    
}
    