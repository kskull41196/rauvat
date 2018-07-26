import { CrudService, ICrudOption } from '../crudService.pg'
import { ExportRequest, WalletExport, User, Wallet } from '@/models/tables'
import {
    errorService, firebaseService
} from '@/services'
import { FCM_ACTIONS } from '../../const'
import * as jsonexport from 'jsonexport'

export class ExportRequestService extends CrudService<typeof ExportRequest> {
    constructor() {
        super(ExportRequest)
    }
    async execute(params: any, option?: ICrudOption) {
        const request_array = params.items;
        let rows: any = [];
        const count_request = request_array.length
        for (let i = 0; i < count_request; i++) {
            const item = await this.exec(this.model.findOne({ where: { id: request_array[i].export_request_id } }), { allowNull: false })
            let state;
            let error: string;
            const amount = item.amount;
            const employee_id = params.employee_id;
            const employee_feedback = "";
            let userItem = await this.exec(User.findOne({ where: { id: item.user_id } }), { allowNull: false }) //tìm user
            const walletItem = await this.exec(Wallet.findOne({ where: { user_id: item.user_id } }), { allowNull: false })//tìm ví của user trên

            if (walletItem.amount_of_purchase < amount) {
                params.state = "DENIED";
                state = params.state
                error = "Tài Khoản Không Đủ Tiền Rút"
                const registrationToken = userItem.registation_id;
                var message = error;
                firebaseService.sendNotification(registrationToken, message, FCM_ACTIONS.WALLET)
            } else {
                const wallet_id = walletItem.id;
                const address = userItem.address;
                const createExport = await this.exec(WalletExport.create({ wallet_id, amount, employee_id, address }, this.applyCreateOptions(option)))
                params.amount_of_purchase = parseInt(walletItem.amount_of_purchase) - parseInt(amount);
                const amount_of_purchase = params.amount_of_purchase
                var updateWallet = await this.exec(walletItem.update({ amount_of_purchase }))
                params.state = "EXPORTED";
                state = params.state
                const registrationToken = userItem.registation_id;
                var message = userItem.fullname + ", bạn đã rút " + item.amount + " khỏi ví của mình.";
                firebaseService.sendNotification(registrationToken, message, FCM_ACTIONS.WALLET)
            }
            // } else {
            //     throw errorService.database.queryFail("Yêu cầu Đã Được Xử Lý")
            // }
            var updated_export_wallet = await this.exec(item.update({ state, employee_id, employee_feedback }))
            updated_export_wallet.dataValues['error'] = error;
            rows.push({ updated_export_wallet, updateWallet })
        }
        return { count: count_request, rows: rows }
    }
}