import { CrudService, ICrudOption } from '../crudService.pg'
import { Employee } from '@/models/tables'

import {
    sequelize
} from '@/models'

import {
    tokenService,
    firebaseService,
    errorService
} from '@/services'

import {
    ICreateAccountEmployee
} from '@/interfaces'

export class EmployeeService extends CrudService<typeof Employee> {
    constructor() {
        super(Employee)
    }

    async createAccount(params: ICreateAccountEmployee) {
        const t = await sequelize.transaction();
        let {
            email,
            password,
            fullname,
            avatar,
            phone
        } = params;

        try {
            let employee = await this.exec(Employee.create(params, {
                transaction: t
            }));

            let user = await firebaseService.createUser({
                email,
                password
            })

            t.commit();

            return {
                employee,
                user
            }
        }
        catch (err) {
            t.rollback();
            if (err.code && err.message) throw errorService.firebase.cannotCreateAccount(err)
            throw err;
        }

    }

}