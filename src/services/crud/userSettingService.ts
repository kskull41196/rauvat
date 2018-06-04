import { CrudService, ICrudOption } from '../crudService.pg'
import { UserSetting } from '@/models/tables'

export class UserSettingService extends CrudService<typeof UserSetting> {
    constructor() {
        super(UserSetting)
    }
    
}