import { CrudService, ICrudOption } from '../crudService.pg'
import { User } from '@/models/tables'
import * as jsonexport from 'jsonexport'
export class UserService extends CrudService<typeof User> {
    constructor() {
        super(User)
    }
    async check_login(params: any, option?: ICrudOption) { 
        
        
        var username = params.username; 
        var password = params.password;
        const result: any = await this.model.count({
            where: {
                username,
                password
            }        
        });
        if(result == 1){

            const item = await this.exec(this.model.findOne({ where: {username: params.username} }), { allowNull: false })
            const id=item.id
            
            const status =item.status
            const created_at =item.created_at
            const updated_at =item.updated_at
            const deleted_at =item.deleted_at

            let resultoflogin: any;
            resultoflogin = {
                username,
                password,
                id,
                
                status,
                created_at,
                updated_at,
                deleted_at
            }
            return resultoflogin;
        }else
        {

            let resultoflogin: any;
            resultoflogin = {
                username:undefined,
                password:undefined,
                
                status:undefined,
                created_at:undefined,
                updated_at:undefined,
                deleted_at:undefined
            }
            return resultoflogin;
        }
    }
}