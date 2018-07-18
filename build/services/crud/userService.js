"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const crudService_pg_1 = require("../crudService.pg");
const services_1 = require("@/services");
const models_1 = require("@/models");
const crypto = require("crypto");
const CONVERT_MD5 = 'md5';
const ENCODING = 'hex';
const base_1 = require("@/models/base");
const moment = require("moment");
class UserService extends crudService_pg_1.CrudService {
    constructor() {
        super(models_1.User);
    }
    sendNotification(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            var registrationToken = params.registation_id;
            var message = params.message;
            const item = yield this.exec(models_1.User.findOne({ where: { registation_id: registrationToken } }), { allowNull: false });
            const user_id = item.id;
            params.title = params.message;
            const title = params.title;
            params.content = params.message;
            const content = params.title;
            const data = { "message": params.message };
            yield this.exec(models_1.Notification.create({ user_id, title, content, data }, this.applyCreateOptions(option)));
            try {
                services_1.firebaseService.sendNotification(registrationToken, message);
                return { registrationToken, message };
            }
            catch (error) {
                return { registrationToken, error };
            }
        });
    }
    updateRegistrationId(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.exec(this.model.findById(option.filter.id), { allowNull: false });
            const registation_id = params.registation_id;
            yield this.exec(item.update({ registation_id }));
            return yield this.getItem(option);
        });
    }
    update(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.exec(this.model.findById(option.filter.id), { allowNull: false });
            if (params.username != item.username && params.username != undefined) {
                throw services_1.errorService.database.queryFail("Không được thay đổi Username");
            }
            else {
                if (params.password != undefined) {
                    var md5Password = crypto.createHash(CONVERT_MD5).update(params.password).digest(ENCODING);
                    params.password = md5Password;
                }
                const registrationToken = item.registation_id;
                var message = "Cập Nhật Thông Tin Tài Khoản " + item.username + " Thành công";
                services_1.firebaseService.sendNotification(registrationToken, message);
                let updatedItem = yield this.exec(item.update(params));
                updatedItem.password = undefined;
                return updatedItem;
            }
        });
    }
    getPassword(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.exec(this.model.findOne({ where: { phone: params.phone } }), { allowNull: false });
            yield this.exec(item.update({ password: params.password }));
            const message = "Đổi mật khẩu thành công";
            return message;
        });
    }
    create(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            var passwordNotMd5 = params.password;
            var md5Password = crypto.createHash(CONVERT_MD5).update(params.password).digest(ENCODING);
            params.password = md5Password;
            var username = params.username;
            var phone = params.phone;
            const resultUserName = yield this.model.count({
                where: {
                    username
                }
            });
            const resultPhone = yield this.model.count({
                where: {
                    phone
                }
            });
            var lenghtPhone = phone.length;
            var lenghtUserName = username.length;
            var lenghtPassword = passwordNotMd5.length;
            if (lenghtUserName <= 3) {
                const resultOfRegister = "Tài khoản phải có từ 4 ký tự trở lên";
                return resultOfRegister;
            }
            else if (lenghtPassword <= 5) {
                const resultOfRegister = "Mật khẩu phải có từ 6 ký tự trở lên";
                return resultOfRegister;
            }
            else if (lenghtPhone > 15 || lenghtPhone < 9) {
                const resultOfRegister = "Số điện thoại sai quy định";
                return resultOfRegister;
            }
            else if (resultUserName == 1) {
                throw services_1.errorService.database.queryFail(username + " đã tồn tại, vui lòng chọn username khác");
            }
            else if (resultPhone == 1) {
                throw services_1.errorService.database.queryFail(phone + " đã tồn tại, vui lòng chọn số điện thoại khác khác");
            }
            else {
                const createdUser = yield this.exec(this.model.create(params, this.applyCreateOptions(option)));
                //tạo ví cho username vừa tạo ở trên với amount_of_purchase mặc định = 0       
                const createWallet = yield this.exec(models_1.Wallet.create({ user_id: createdUser.id }, this.applyCreateOptions(option)));
                const createUseSetting = yield this.exec(models_1.UserSetting.create({ user_id: createdUser.id }, this.applyCreateOptions(option)));
                return { createdUser, createWallet, createUseSetting };
            }
        });
    }
    checkLogin(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.count({
                where: {
                    username: params.username,
                    password: params.password
                }
            });
            if (result == 1) {
                const item = yield this.exec(this.model.findOne({ where: { username: params.username } }), { allowNull: false });
                item.password = undefined;
                return item;
            }
            else {
                throw services_1.errorService.database.queryFail("Vui lòng kiểm tra lại Tài khoản hoặc mật khẩu");
            }
        });
    }
    checkUsername(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield this.model.count({
                where: { username: params.username }
            });
            if (result == 1) {
                const duplicate = true;
                const resultOfCheckUser = params.username + " đã tồn tại, vui lòng chọn username khác";
                return { duplicate, resultOfCheckUser };
            }
            else {
                const resultOfCheckUser = "Có thể sử dụng " + params.username;
                return { message: resultOfCheckUser };
            }
        });
    }
    upgrade(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            let { user_id, user_type } = params;
            const t = yield base_1.sequelize.transaction();
            try {
                let history_membership = yield this.exec(models_1.HistoryMembership.create({
                    user_id: user_id,
                    type: 'UPGRADE'
                }, {
                    transaction: t
                }));
                yield this.exec(models_1.User.update({
                    user_type: user_type,
                    latest_updated_membership: moment().format()
                }, {
                    where: {
                        id: user_id
                    },
                    transaction: t
                }));
                const result = yield models_1.Store.count({
                    where: {
                        user_id,
                    }
                });
                if (result == 1) {
                    var createStoreFail = "Cửa Hàng Đã Được Tạo Rồi";
                }
                else {
                    const item = yield this.exec(models_1.User.findOne({ where: { id: user_id } }), { allowNull: false });
                    var createStore = yield this.exec(models_1.Store.create({
                        user_id: user_id,
                        working_time_from: 0,
                        working_time_to: 0,
                        phone: item.phone,
                        description: "",
                        address: item.address,
                        name: "Cửa Hàng Của " + item.fullname,
                        avatar: item.avatar,
                    }, this.applyCreateOptions(option)));
                }
                let user = yield this.exec(models_1.User.findOne({
                    where: {
                        id: user_id
                    },
                    include: [
                        {
                            association: 'history_memberships'
                        }
                    ],
                    transaction: t
                }));
                t.commit();
                return { user, message: createStore || createStoreFail };
            }
            catch (e) {
                t.rollback();
                throw e;
            }
        });
    }
    downgrade(params) {
        return __awaiter(this, void 0, void 0, function* () {
            let { user_id } = params;
            const t = yield base_1.sequelize.transaction();
            try {
                let history_membership = yield this.exec(models_1.HistoryMembership.create({
                    user_id: user_id,
                    type: 'DOWNGRADE'
                }, {
                    transaction: t
                }));
                yield this.exec(models_1.User.update({
                    user_type: 'NORMAL'
                }, {
                    where: {
                        id: user_id
                    },
                    transaction: t
                }));
                let user = yield this.exec(models_1.User.findOne({
                    where: {
                        id: user_id
                    },
                    include: [
                        {
                            association: 'history_memberships'
                        }
                    ],
                    transaction: t
                }));
                t.commit();
                return user;
            }
            catch (e) {
                t.rollback();
                throw e;
            }
        });
    }
}
exports.UserService = UserService;
//# sourceMappingURL=userService.js.map