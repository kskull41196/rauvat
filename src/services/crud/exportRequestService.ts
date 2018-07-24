import { CrudService, ICrudOption } from '../crudService.pg'
import { ExportRequest } from '@/models/tables'
import * as jsonexport from 'jsonexport'

export class ExportRequestService extends CrudService<typeof ExportRequest> {
    constructor() {
        super(ExportRequest)
    }
    
}