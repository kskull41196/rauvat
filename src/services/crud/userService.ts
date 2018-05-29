import { CrudService, ICrudOption } from '../crudService.pg'
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
            let resultOfEditUser: any;
            resultOfEditUser = { error_username: true }
            return resultOfEditUser;
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
        var password = params.password;
        const item = await this.exec(this.model.findOne({ where: { phone: params.phone } }), { allowNull: false })
        await this.exec(item.update({ password }))
        const thongbao = "Đổi mật khẩu thành công";
        return thongbao;

    }

    async createUser(params: any, option?: ICrudOption) {
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
            const isDuplicated = false;
            const resultString = username + " Đã tồn tại";
            const createUser = false;

            let resultOfRegister: any;
            resultOfRegister = { isDuplicated, resultString, createUser }
            return resultOfRegister;
        }
        else if (resultPhone == 1) {
            const isDuplicated = false;
            const resultString = phone + " Đã tồn tại";
            const createUser = false;

            let resultOfRegister: any;
            resultOfRegister = { isDuplicated, resultString, createUser }
            return resultOfRegister;
        } else {
            const isDuplicated = true;
            const resultString = username + " chưa tồn tại";
            const createUser = await this.exec(
                this.model.create(params, this.applyCreateOptions(option))
            )
            const item = await this.exec(this.model.findOne({ where: { username } }), { allowNull: false }) //tìm username vừa dc tạo
            params.user_id = item.id //cho user_id của wallet = id của username vừa dc tạo ở trên
            const createWallet = await this.exec(
                Wallet.create(params, this.applyCreateOptions(option)) //tạo ví cho username vừa tạo ở trên với amount_of_purchase mặc định = 0
            )
            let resultOfRegister: any;
            resultOfRegister = { isDuplicated, resultString, createUser, createWallet }
            return resultOfRegister;
        }


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
            const isDuplicated = false;
            const resultString = username + " đã tồn tại, vui lòng chọn username khác";
            const createUser = false;

            let resultOfRegister: any;
            resultOfRegister = { isDuplicated, resultString, createUser }
            return resultOfRegister;
        }
        else if (resultPhone == 1) {
            const isDuplicated = false;
            const resultString = phone + " đã tồn tại, vui lòng chọn số điện thoại khác khác";
            const createUser = false;

            let resultOfRegister: any;
            resultOfRegister = { isDuplicated, resultString, createUser }
            return resultOfRegister;
        } else {
            const isDuplicated = true;
            const resultString = username + " chưa tồn tại";
            const createUser = await this.exec(
                this.model.create(params, this.applyCreateOptions(option))
            )
            const item = await this.exec(this.model.findOne({ where: { username } }), { allowNull: false }) //tìm username vừa dc tạo
            params.user_id = item.id //cho user_id của wallet = id của username vừa dc tạo ở trên
            const createWallet = await this.exec(
                Wallet.create(params, this.applyCreateOptions(option)) //tạo ví cho username vừa tạo ở trên với amount_of_purchase mặc định = 0
            )
            let resultOfRegister: any;
            resultOfRegister = { isDuplicated, resultString, createUser, createWallet }
            return resultOfRegister;
        }


    }
    async checkLogin(params: any, option?: ICrudOption) {


        var userName = params.username;
        var passWord = params.password;
        const result: any = await this.model.count({
            where: {
                username: userName,
                password: passWord
            }
        });
        if (result == 1) {

            const item = await this.exec(this.model.findOne({ where: { username: userName } }), { allowNull: false })
            const id = item.id
            const fullname = item.fullname
            const avatar = item.avatar
            const sex = item.sex
            const birthday = item.birthday
            const phone = item.phone
            const address = item.address
            const longitude = item.longitude
            const latitude = item.latitude
            const user_type = item.user_type
            const email = item.email
            const amount_of_like = item.amount_of_like
            const amount_of_comment = item.amount_of_comment
            const amount_of_order = item.amount_of_order
            const amount_of_purchase = item.amount_of_purchase
            const username = item.username
            const status = item.status
            const created_at = item.created_at
            const updated_at = item.updated_at
            const deleted_at = item.deleted_at

            let resultoflogin: any;
            resultoflogin = {
                username,
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
        } else {

            let resultoflogin: any;
            resultoflogin = {
                username: undefined,
                passWord: undefined,
                id: undefined,
                fullname: undefined,
                avatar: undefined,
                sex: undefined,
                birthday: undefined,
                phone: undefined,
                address: undefined,
                longitude: undefined,
                latitude: undefined,
                user_type: undefined,
                email: undefined,
                amount_of_like: undefined,
                amount_of_comment: undefined,
                amount_of_order: undefined,
                amount_of_purchase: undefined,
                status: undefined,
                created_at: undefined,
                updated_at: undefined,
                deleted_at: undefined
            }
            return resultoflogin;
        }
    }
}