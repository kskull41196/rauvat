import { CrudService, ICrudOption } from '../crudService.pg'
import {
    errorService,
} from '@/services'
import { Wallet, WalletExport, WalletImport } from '@/models/tables'
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
        if (item.amount_of_purchase < amount) {
            throw errorService.database.queryFail("Số tiền hiện tại không đủ để xuất")
        } else {        
            const createExport = await this.exec(WalletExport.create(params, this.applyCreateOptions(option)))
            params.amount_of_purchase = parseInt(item.amount_of_purchase) - parseInt(amount);//sau khi xuất tiền trong ví = tiền đang có - tiền vừa xuất         
            const updateWallet = await this.exec(item.update(params))//cập nhật số tiền sao khi đã xuất
            return {  createExport, updateWallet }
        }
    }
    async import(params: any, option?: ICrudOption) {
        const item = await this.exec(Wallet.findById(option.filter.id), { allowNull: false })
        params.wallet_id = item.id
        var amount = params.amount
        const createImport = await this.exec(WalletImport.create(params, this.applyCreateOptions(option)))
        params.amount_of_purchase = parseInt(item.amount_of_purchase) + parseInt(amount);//sau khi thêm tiền trong ví = tiền đang có + tiền vừa thêm         
        const updateWallet = await this.exec(item.update(params))//cập nhật số tiền sao khi đã xuất
        return {  createImport, updateWallet }
    }

}