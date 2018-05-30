import { CrudService, ICrudOption } from '../crudService.pg'
import {
    errorService,
} from '@/services'
import { User, Wallet } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'
import { config } from '@/config'
const CONVERT_MD5 = 'md5'
const ENCODING = 'hex'
export class UserService extends CrudService<typeof User> {
    constructor() {
        super(User)
    }
    async update(params: any, option?: ICrudOption) {
        const item = await this.exec(this.model.findById(option.filter.id), { allowNull: false })
        if (params.username != item.username || params.username == undefined) {
            throw errorService.database.queryFail("Không được thay đổi Username")
        } else {
            var md5Password = crypto.createHash(CONVERT_MD5).update(params.password).digest(ENCODING)
            params.password = md5Password;
            await this.exec(item.update(params))
            let resultOfEditUser: any;
            resultOfEditUser = { params }
            return resultOfEditUser;
        }
    }
    async getPassword(params: any, option?: ICrudOption) {
        const item = await this.exec(this.model.findOne({ where: { phone: params.phone } }), { allowNull: false })
        await this.exec(item.update({ password: params.password }))
        const message = "Đổi mật khẩu thành công";
        return message;

    }

    async create(params: any, option?: ICrudOption) {
        var passwordNotMd5 = params.password
        var md5Password = crypto.createHash(CONVERT_MD5).update(params.password).digest(ENCODING)
        params.password = md5Password;
        var username = params.username;
        var phone = params.phone;

        const resultUserName: any = await this.model.count({
            where: {
                username
            }
        });
        const resultPhone: any = await this.model.count({
            where: {
                phone
            }

        });
        var lenghtPhone = phone.length
        var lenghtUserName = username.length
        var lenghtPassword = passwordNotMd5.length
        if (lenghtUserName <= 3) {
            const resultOfRegister = "Tài khoản phải có từ 4 ký tự trở lên"
            return resultOfRegister;
        } else if (lenghtPassword <= 5) {
            const resultOfRegister = "Mật khẩu phải có từ 6 ký tự trở lên"
            return resultOfRegister;
        } else if (lenghtPhone > 15 || lenghtPhone < 9) {
            const resultOfRegister = "Số điện thoại sai quy định"
            return resultOfRegister;
        } else if (resultUserName == 1) {
            throw errorService.database.queryFail(username + " đã tồn tại, vui lòng chọn username khác")
        }
        else if (resultPhone == 1) {
            throw errorService.database.queryFail(phone + " đã tồn tại, vui lòng chọn số điện thoại khác khác")
        } else {
            const createdUser = await this.exec(this.model.create(params, this.applyCreateOptions(option)))   
             //tạo ví cho username vừa tạo ở trên với amount_of_purchase mặc định = 0       
            const createWallet = await this.exec(Wallet.create({user_id:createdUser.id}, this.applyCreateOptions(option)))
            return { createdUser, createWallet };
        }
    }
    async checkLogin(params: any, option?: ICrudOption) {
        const result: any = await this.model.count({
            where: {
                username: params.username,
                password: params.password
            }
        });
        if (result == 1) {
            const item = await this.exec(this.model.findOne({ where: { username: params.username } }), { allowNull: false })
            item.password = undefined
            return item;
        } else {

            let resultoflogin: any;
            resultoflogin = {
                username: undefined,
                password: undefined,
            }
            return resultoflogin;
        }
    }
}