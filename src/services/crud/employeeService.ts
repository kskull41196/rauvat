import { CrudService, ICrudOption } from '../crudService.pg'
import { Employee } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class EmployeeService extends CrudService<typeof Employee> {
    constructor() {
        super(Employee)
    }
    
}