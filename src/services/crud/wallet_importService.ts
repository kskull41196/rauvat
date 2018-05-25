import { CrudService, ICrudOption } from '../crudService.pg'
import { Wallet_import } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class Wallet_importService extends CrudService<typeof Wallet_import> {
    constructor() {
        super(Wallet_import)
    }
    
}