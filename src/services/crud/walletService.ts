import { CrudService, ICrudOption } from '../crudService.pg'
import { Wallet, Wallet_export, Wallet_import } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class WalletService extends CrudService<typeof Wallet> {
    constructor() {
        super(Wallet)
    }
    async export(params: any, option?: ICrudOption) {
        const item = await this.exec(Wallet.findById(option.filter.id), { allowNull: false })
        params.wallet_id = item.id
        var amount = params.amount
        var amount_of_purchase_number = item.amount_of_purchase
        if (item.amount_of_purchase <= amount) {
            const createExport = "Số tiền xuất không hợp lý";
            let resultOfExport: any;
            resultOfExport = { createExport }
            return resultOfExport;
        } else {
            const invalid = false;
            params.employee_id
            const createExport = await this.exec(Wallet_export.create(params, this.applyCreateOptions(option))
            )
            params.amount_of_purchase = parseInt(amount_of_purchase_number) - parseInt(amount);//sau khi xuất tiền trong ví = tiền đang có - tiền vừa xuất         
            const updateWallet = await this.exec(item.update(params))//cập nhật số tiền sao khi đã xuất

            let resultOfExport: any;
            resultOfExport = { invalid, createExport, updateWallet }
            return resultOfExport;
        }
    }
    async import(params: any, option?: ICrudOption) {
        const item = await this.exec(Wallet.findById(option.filter.id), { allowNull: false })
        params.wallet_id = item.id
        var amount = params.amount
        var amount_of_purchase_number = item.amount_of_purchase
        params.employee_id
        const createExport = await this.exec(Wallet_import.create(params, this.applyCreateOptions(option))
        )
        params.amount_of_purchase = parseInt(amount_of_purchase_number) + parseInt(amount);//sau khi thêm tiền trong ví = tiền đang có + tiền vừa thêm         
        const updateWallet = await this.exec(item.update(params))//cập nhật số tiền sao khi đã xuất

        let resultOfExport: any;
        resultOfExport = { createExport, updateWallet }
        return resultOfExport;
    }

}