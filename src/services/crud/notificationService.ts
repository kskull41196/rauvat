import { CrudService, ICrudOption } from '../crudService.pg'
import { Notification } from '@/models/tables'
import * as jsonexport from 'jsonexport'

export class NotificationService extends CrudService<typeof Notification> {
    constructor() {
        super(Notification)
    }
    
}