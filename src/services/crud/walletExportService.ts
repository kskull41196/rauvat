import { CrudService, ICrudOption } from '../crudService.pg'
import { WalletExport } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class WalletExportService extends CrudService<typeof WalletExport> {
    constructor() {
        super(WalletExport)
    }
    
}