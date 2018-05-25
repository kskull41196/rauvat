import { CrudService, ICrudOption } from '../crudService.pg'
import { Wallet } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class WalletService extends CrudService<typeof Wallet> {
    constructor() {
        super(Wallet)
    }
    
}