import { CrudService, ICrudOption } from '../crudService.pg'
import { Wallet, Wallet_export } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class WalletService extends CrudService<typeof Wallet> {
    constructor() {
        super(Wallet)
    }
    async export(params: any, option?: ICrudOption) {
        params.employee_id
        const item = await this.exec(Wallet.findById(option.filter.id), { allowNull: false })
        params.wallet_id = item.id
        var amount = params.amount
        if (item.amount_of_purchase <= amount) {
            const Invalid = false;
            const createExport = "Số tiền xuất không hợp lý";

            let resultOfExport: any;
            resultOfExport = { Invalid, createExport }
            return resultOfExport;
        } else {
            const Invalid = true;
            const createExport = await this.exec(Wallet_export.create(params, this.applyCreateOptions(option))
            )
            var amount_of_purchase_after_export=item.amount_of_purchase - amount;//sau khi xuất tiền trong ví = tiền đang có - tiền vừa xuất
            params.amount_of_purchase=amount_of_purchase_after_export
            const updateWallet=await this.exec(item.update(params))//cập nhật số tiền sao khi đã xuất

            let resultOfExport: any;
            resultOfExport = { Invalid, createExport, updateWallet}
        }
    }
}