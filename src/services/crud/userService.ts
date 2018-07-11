import { CrudService, ICrudOption } from '../crudService.pg'
import {
    errorService, firebaseService
} from '@/services'
import {
    User,
    Wallet,
    UserSetting,
    HistoryMembership,
    Store
} from '@/models'
import * as crypto from 'crypto'
const CONVERT_MD5 = 'md5'
const ENCODING = 'hex'
import {
    sequelize,
    Sequelize
} from '@/models/base'
import * as moment from 'moment'
import * as admin from "firebase-admin";

export class UserService extends CrudService<typeof User> {
    constructor() {
        super(User)
    }
    async sendNotification(params: any, option?: ICrudOption) {
        var registrationToken = params.registation_id;
        var message = params.message;
        try {
            firebaseService.sendNotification(registrationToken, message)
            return { registrationToken, message }
        } catch (error) {
            return { registrationToken, error }
        }
    }
    async updateRegistrationId(params: any, option?: ICrudOption) {
        const item = await this.exec(this.model.findById(option.filter.id), { allowNull: false })
        const registation_id = params.registation_id
        await this.exec(item.update({ registation_id }))
        return await this.getItem(option)
    }
    async update(params: any, option?: ICrudOption) {
        const item = await this.exec(this.model.findById(option.filter.id), { allowNull: false })
        if (params.username != item.username && params.username != undefined) {
            throw errorService.database.queryFail("Không được thay đổi Username")
        } else {
            if (params.password != undefined) {
                var md5Password = crypto.createHash(CONVERT_MD5).update(params.password).digest(ENCODING)
                params.password = md5Password;
            }
            let updatedItem = await this.exec(item.update(params))
            updatedItem.password = undefined
            return updatedItem;
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
            const createWallet = await this.exec(Wallet.create({ user_id: createdUser.id }, this.applyCreateOptions(option)))
            const createUseSetting = await this.exec(UserSetting.create({ user_id: createdUser.id }, this.applyCreateOptions(option)))
            return { createdUser, createWallet, createUseSetting };
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
            throw errorService.database.queryFail("Vui lòng kiểm tra lại Tài khoản hoặc mật khẩu")
        }
    }
    async checkUsername(params: any, option?: ICrudOption) {
        const result: any = await this.model.count({
            where: { username: params.username }
        });
        if (result == 1) {
            const duplicate = true
            const resultOfCheckUser = params.username + " đã tồn tại, vui lòng chọn username khác"
            return { duplicate, resultOfCheckUser };
        } else {
            const resultOfCheckUser = "Có thể sử dụng " + params.username
            return { message: resultOfCheckUser };
        }
    }

    async upgrade(params: {
        user_id: string,
        user_type: string
    }, option?: ICrudOption) {
        let {
            user_id,
            user_type
        } = params;

        const t = await sequelize.transaction();

        try {
            let history_membership = await this.exec(HistoryMembership.create({
                user_id: user_id,
                type: 'UPGRADE'
            }, {
                    transaction: t
                }));

            await this.exec(User.update({
                user_type: user_type,
                latest_updated_membership: moment().format()
            }, {
                    where: {
                        id: user_id
                    },
                    transaction: t
                }))
            const result: any = await Store.count({
                where: {
                    user_id,
                }
            });
            if (result == 1) {
                var createStoreFail = "Cửa Hàng Đã Được Tạo Rồi"
            } else {
                const item = await this.exec(User.findOne({ where: { id: user_id } }), { allowNull: false })
                var createStore = await this.exec(Store.create({
                    user_id: user_id,
                    working_time_from: 0,
                    working_time_to: 0,
                    phone: item.phone,
                    description: "",
                    address: item.address,
                    name: "Cửa Hàng Của " + item.fullname,
                    avatar: item.avatar,
                }, this.applyCreateOptions(option)))
            }
            let user = await this.exec(User.findOne({
                where: {
                    id: user_id
                },
                include: [
                    {
                        association: 'history_memberships'
                    }
                ],
                transaction: t
            }))

            t.commit();
            return { user, message: createStore || createStoreFail };
        }
        catch (e) {
            t.rollback();
            throw e;
        }
    }

    async downgrade(params: {
        user_id: string
    }) {
        let {
            user_id
        } = params;

        const t = await sequelize.transaction();

        try {
            let history_membership = await this.exec(HistoryMembership.create({
                user_id: user_id,
                type: 'DOWNGRADE'
            }, {
                    transaction: t
                }));

            await this.exec(User.update({
                user_type: 'NORMAL'
            }, {
                    where: {
                        id: user_id
                    },
                    transaction: t
                }))

            let user = await this.exec(User.findOne({
                where: {
                    id: user_id
                },
                include: [
                    {
                        association: 'history_memberships'
                    }
                ],
                transaction: t
            }))

            t.commit();
            return user;
        }
        catch (e) {
            t.rollback();
            throw e;
        }
    }

}