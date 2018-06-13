import { CrudService, ICrudOption } from '../crudService.pg'
import { WalletImport } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class WalletImportService extends CrudService<typeof WalletImport> {
    constructor() {
        super(WalletImport)
    }
    
}