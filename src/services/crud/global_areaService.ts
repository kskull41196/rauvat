import { CrudService, ICrudOption } from '../crudService.pg'
import { Global_area } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'

export class Global_areaService extends CrudService<typeof Global_area> {
    constructor() {
        super(Global_area)
    }
    async getItemWithParents(params: any, option?: ICrudOption) {
       let item = await this.exec(this.model.findOne({ where: { id:  params.id } }), { allowNull: false })  
       let areaArray = [];
       areaArray.push(item);
        while (item.parent_id != undefined) {
            item = await this.exec(this.model.findOne({ where: { id:  item.parent_id } }), { allowNull: false })
            areaArray.push(item);
        }

        return areaArray
    }
}