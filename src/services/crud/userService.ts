import { CrudService, ICrudOption } from '../crudService.pg'
import { User } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'
export class UserService extends CrudService<typeof User> {
    constructor() {
        super(User)
    }
    async getpassword(params: any, option?: ICrudOption) {   
        var password = params.password;
        const item = await this.exec(this.model.findOne({where:{phone: params.phone}}), { allowNull: false })
        await this.exec(item.update({password}))
        const thongbao ="Đổi mật khẩu thành công";
        return thongbao;
        
    }
    
    async createUser(params: any, option?: ICrudOption) {    
        var bampass = crypto.createHash('md5').update(params.password).digest('hex')    
        var password = bampass;
        var passwordnotmd5 = params.password
        var username = params.username;
        var phone = params.phone;
        const resultusername: any = await this.model.count({
            where: {
                username
            }
        });
        const resultphone: any = await this.model.count({
            where: {
                phone
            }
            
        });
        var lenghtphone = phone.length
        var lenghtusername= username.length
        var lenghtpassword= passwordnotmd5.length
        if(lenghtusername <= 3){
            const resultofregister = "Tài khoản phải có từ 4 ký tự trở lên"
            return resultofregister;
        }else if(lenghtpassword <= 5 ){
            const resultofregister = "Mật khẩu phải có từ 6 ký tự trở lên"
            return resultofregister;
        }else if(lenghtphone > 14 || lenghtphone <10){
            const resultofregister = "Số điện thoại sai quy định"
            return resultofregister;
        }else  if(resultusername == 1)
        {
            const isDuplicated = false;
            const resultString = username+" Đã tồn tại";
            const createuser=false;
            
            let resultofregister: any;
            resultofregister = {isDuplicated,resultString,createuser}
            return resultofregister;
        }
        else  if(resultphone == 1)
        {
            const isDuplicated = false;
            const resultString = phone+" Đã tồn tại";
            const createuser=false;
            
            let resultofregister: any;
            resultofregister = {isDuplicated,resultString,createuser}
            return resultofregister;
        }else
        {
            const isDuplicated = true;
            const resultString = username+" chưa tồn tại";
            const createuser =await this.exec(
            this.model.create(params, this.applyCreateOptions(option))
            )
            let resultofregister: any;
            resultofregister = {isDuplicated,resultString,createuser}
            return resultofregister; 
        }

        
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
            const fullname=item.fullname
            const avatar=item.avatar
            const sex=item.sex
            const birthday=item.birthday
            const phone=item.phone
            const address=item.address
            const longitude=item.longitude
            const latitude=item.latitude
            const user_type=item.user_type
            const email=item.email
            const amount_of_like=item.amount_of_like
            const amount_of_comment=item.amount_of_comment
            const amount_of_order=item.amount_of_order
            const amount_of_purchase=item.amount_of_purchase
            const username=item.username            
            const status =item.status
            const created_at =item.created_at
            const updated_at =item.updated_at
            const deleted_at =item.deleted_at

            let resultoflogin: any;
            resultoflogin = {
                username,
                password,
                id,
                fullname,
                avatar,
                sex,
                birthday,
                phone,
                address,
                longitude,
                latitude,
                user_type,
                email,
                amount_of_like,
                amount_of_comment,
                amount_of_order,
                amount_of_purchase,                      
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
                id:undefined,
                fullname:undefined,
                avatar:undefined,
                sex:undefined,
                birthday:undefined,
                phone:undefined,
                address:undefined,
                longitude:undefined,
                latitude:undefined,
                user_type:undefined,
                email:undefined,
                amount_of_like:undefined,
                amount_of_comment:undefined,
                amount_of_order:undefined,
                amount_of_purchase:undefined,
                status:undefined,
                created_at:undefined,
                updated_at:undefined,
                deleted_at:undefined
            }
            return resultoflogin;
        }
    }
}