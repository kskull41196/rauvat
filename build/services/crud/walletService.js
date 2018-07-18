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
const tables_1 = require("@/models/tables");
class WalletService extends crudService_pg_1.CrudService {
    constructor() {
        super(tables_1.Wallet);
    }
    export(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.exec(tables_1.Wallet.findById(option.filter.id), { allowNull: false });
            params.wallet_id = item.id;
            const amount = params.amount;
            if (item.amount_of_purchase < amount) {
                throw services_1.errorService.database.queryFail("Số tiền hiện tại không đủ để xuất");
            }
            else {
                const createExport = yield this.exec(tables_1.WalletExport.create(params, this.applyCreateOptions(option)));
                params.amount_of_purchase = parseInt(item.amount_of_purchase) - parseInt(amount); //sau khi xuất tiền trong ví = tiền đang có - tiền vừa xuất         
                const updateWallet = yield this.exec(item.update(params)); //cập nhật số tiền sao khi đã xuất
                const itemUser = yield this.exec(tables_1.User.findOne({ where: { id: item.user_id } }), { allowNull: false });
                const registrationToken = itemUser.registation_id;
                var message = itemUser.fullname + ", bạn đã rút " + amount + " khỏi ví của mình.";
                services_1.firebaseService.sendNotification(registrationToken, message);
                return { createExport, updateWallet };
            }
        });
    }
    import(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.exec(tables_1.Wallet.findById(option.filter.id), { allowNull: false });
            params.wallet_id = item.id;
            const amount = params.amount;
            const createImport = yield this.exec(tables_1.WalletImport.create(params, this.applyCreateOptions(option)));
            params.amount_of_purchase = parseInt(item.amount_of_purchase) + parseInt(amount); //sau khi thêm tiền trong ví = tiền đang có + tiền vừa thêm         
            const updateWallet = yield this.exec(item.update(params)); //cập nhật số tiền sao khi đã xuất
            const itemUser = yield this.exec(tables_1.User.findOne({ where: { id: item.user_id } }), { allowNull: false });
            const registrationToken = itemUser.registation_id;
            var message = itemUser.fullname + ", bạn đã nạp " + amount + " vào ví của mình.";
            services_1.firebaseService.sendNotification(registrationToken, message);
            return { createImport, updateWallet };
        });
    }
}
exports.WalletService = WalletService;
//# sourceMappingURL=walletService.js.map