import { CrudService, ICrudOption } from '../crudService.pg'
import { Post, User, Employee, FavoritePost, ProductPost } from '@/models/tables'
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
        item.dataValues.id = undefined
        item.dataValues.created_at = undefined
        item.dataValues.updated_at = undefined
        item.dataValues.deleted_at = undefined
        item.dataValues.status = undefined
        item.dataValues.editor = undefined
        item.dataValues.editor_type = undefined
        const createPost = await this.exec(
            this.model.create(item.dataValues, this.applyCreateOptions(option))
        )
        item.dataValues.id = option.filter.id;

        params.updated_id = createPost.id;
        var editor_type;
        if (params.editor_role == 'ADMIN') {
            params.editor_type = "EMPLOYEE"
            editor_type = params.editor_type
        } else {
            params.editor_type = "USER"
            editor_type = params.editor_type
        }
        const updated_id = params.updated_id;
        const editor = params.editor;
        await this.exec(item.update({ editor_type, updated_id, editor }))
        await this.exec(FavoritePost.update({ post_id: createPost.id }, { where: { post_id: item.id } }))
        await this.exec(ProductPost.update({ post_id: createPost.id }, { where: { post_id: item.id } }))
        return createPost
    }
    async getPostWithHistory(params: any, option?: ICrudOption) {
        let item = await this.exec(this.model.findById(option.filter.id), { allowNull: false })
        var post = JSON.parse(JSON.stringify(item));

        let object = [];
        let findPostHistory;
        try {
            findPostHistory = await this.exec(Post.findOne({ where: { updated_id: item.id } }), { allowNull: false })
        } catch (e) {
            return { current_post: post }
        }

        object.push(findPostHistory);
        if (findPostHistory.editor_type == 'USER') {
            var editor_user = await this.exec(User.findOne({ where: { id: findPostHistory.editor } }), { allowNull: false })
        }
        if (findPostHistory.editor_type == 'EMPLOYEE') {
            var editor_employee = await this.exec(Employee.findOne({ where: { id: findPostHistory.editor } }), { allowNull: false })
        }

        while (true) {
            try {
                findPostHistory = await this.exec(Post.findOne({ where: { updated_id: findPostHistory.id } }), { allowNull: false })
                object.push(findPostHistory);
                console.log("aaaaa " + findPostHistory.updated_id);
            } catch (e) {
                break;
            }
        }

        const current_post = { post, editor: editor_user || editor_employee }
        return { current_post, history: object }
    }
    async getList(option: ICrudOption = {
        limit: config.database.defaultPageSize,
        offset: 0,
        scope: ['defaultScope']
    }) {
        option.filter['updated_id'] = null
        return await this.exec(
            this.modelWithScope(option.scope)
                .findAndCountAll(this.applyFindOptions(option))
        )
    }
}