import { CrudService, ICrudOption } from '../crudService.pg'
import { Report } from '@/models/tables'
import * as jsonexport from 'jsonexport'

export class ReportService extends CrudService<typeof Report> {
    constructor() {
        super(Report)
    }
    async update(params: any, option?: ICrudOption) {
        let description = params.description;
        let user_id = params.user_id;
        let reported_id_type = params.reported_id_type;
        let reported_id = params.reported_id;
        const item = await this.exec(this.model.findById(option.filter.id), { allowNull: false })
        await this.exec(item.update({ description, user_id, reported_id_type, reported_id }))
        return await this.getItem(option)
    }

    async updateCommentAdmin(params: any, option?: ICrudOption) {
        let admin_comment = params.admin_comment;
        const item = await this.exec(this.model.findOne({ where: { id: params.id } }), { allowNull: false })
        await this.exec(item.update({ admin_comment }))
        return await this.getItem(option)
    }

}