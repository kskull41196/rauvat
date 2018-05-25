import { CrudService, ICrudOption } from '../crudService.pg'
import { Wallet_export } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class Wallet_exportService extends CrudService<typeof Wallet_export> {
    constructor() {
        super(Wallet_export)
    }
    
}