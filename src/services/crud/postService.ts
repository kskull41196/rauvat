import { CrudService, ICrudOption } from '../crudService.pg'
import { Post, User, Employee } from '@/models/tables'
import * as jsonexport from 'jsonexport'
import * as crypto from 'crypto'
import { config } from '@/config'
export class PostService extends CrudService<typeof Post> {
    constructor() {
        super(Post)
    }
    async update(params: any, option?: ICrudOption) {
        const item = await this.exec(this.model.findById(option.filter.id), { allowNull: false })
        //get data from params to item
        var keys = Object.keys(params);
        for (var j = 0; j < keys.length; j++) {
            item.dataValues[keys[j]] = params[keys[j]];
        }
        if (params.editor_role == 'ADMIN') {
            item.dataValues.editor_type = "EMPLOYEE"
        } else {
            item.dataValues.editor_type = "USER"
        }
        item.dataValues.origin_id = item.id
        item.dataValues.id = undefined
        item.dataValues.created_at = undefined
        item.dataValues.updated_at = undefined
        item.dataValues.deleted_at = undefined
        item.dataValues.status = undefined
        const createPost = await this.exec(
            this.model.create(item.dataValues, this.applyCreateOptions(option))
        )
        return createPost
    }
    async getPostWithHistory(params: any, option?: ICrudOption) {
        let item = await this.exec(this.model.findById(option.filter.id), { allowNull: false })
        const post = await this.exec(this.model.findById(option.filter.id), { allowNull: false })
        if (item.editor_type == 'USER') {
            var editor_user = await this.exec(User.findOne({ where: { id: item.editor } }), { allowNull: false })
        }
        if (item.editor_type == 'EMPLOYEE') {
            var editor_employee = await this.exec(Employee.findOne({ where: { id: item.editor } }), { allowNull: false })
        }
        const current_post = { post, editor: editor_user || editor_employee }
        let object = [];
        while (item.origin_id != undefined) {
            item = await this.exec(this.model.findOne({ where: { id: item.origin_id } }), { allowNull: false })
            object.push(item);
        }

        return { current_post, history: object }
    }
    async getList(option: ICrudOption = {
        limit: config.database.defaultPageSize,
        offset: 0,
        scope: ['defaultScope']
    }) {
        return await this.exec(
            this.modelWithScope(option.scope)
                .findAndCountAll({ where: { origin_id: null } })
        )
    }
}