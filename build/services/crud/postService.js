"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const crudService_pg_1 = require("../crudService.pg");
const tables_1 = require("@/models/tables");
const config_1 = require("@/config");
class PostService extends crudService_pg_1.CrudService {
    constructor() {
        super(tables_1.Post);
    }
    update(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            const item = yield this.exec(this.model.findById(option.filter.id), { allowNull: false });
            //get data from params to item
            var keys = Object.keys(params);
            for (var j = 0; j < keys.length; j++) {
                item.dataValues[keys[j]] = params[keys[j]];
            }
            item.dataValues.id = undefined;
            item.dataValues.created_at = undefined;
            item.dataValues.updated_at = undefined;
            item.dataValues.deleted_at = undefined;
            item.dataValues.status = undefined;
            item.dataValues.editor = undefined;
            item.dataValues.editor_type = undefined;
            const createPost = yield this.exec(this.model.create(item.dataValues, this.applyCreateOptions(option)));
            item.dataValues.id = option.filter.id;
            params.updated_id = createPost.id;
            var editor_type;
            if (params.editor_role == 'ADMIN') {
                params.editor_type = "EMPLOYEE";
                editor_type = params.editor_type;
            }
            else {
                params.editor_type = "USER";
                editor_type = params.editor_type;
            }
            const updated_id = params.updated_id;
            const editor = params.editor;
            yield this.exec(item.update({ editor_type, updated_id, editor }));
            yield this.exec(tables_1.FavoritePost.update({ post_id: createPost.id }, { where: { post_id: item.id } }));
            yield this.exec(tables_1.ProductPost.update({ post_id: createPost.id }, { where: { post_id: item.id } }));
            return createPost;
        });
    }
    getPostWithHistory(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            let item = yield this.exec(this.model.findById(option.filter.id), { allowNull: false });
            var post = JSON.parse(JSON.stringify(item));
            let object = [];
            let findPostHistory;
            try {
                findPostHistory = yield this.exec(tables_1.Post.findOne({ where: { updated_id: item.id } }), { allowNull: false });
            }
            catch (e) {
                return { current_post: post };
            }
            object.push(findPostHistory);
            if (findPostHistory.editor_type == 'USER') {
                var editor_user = yield this.exec(tables_1.User.findOne({ where: { id: findPostHistory.editor } }), { allowNull: false });
            }
            if (findPostHistory.editor_type == 'EMPLOYEE') {
                var editor_employee = yield this.exec(tables_1.Employee.findOne({ where: { id: findPostHistory.editor } }), { allowNull: false });
            }
            while (true) {
                try {
                    findPostHistory = yield this.exec(tables_1.Post.findOne({ where: { updated_id: findPostHistory.id } }), { allowNull: false });
                    object.push(findPostHistory);
                    console.log("aaaaa " + findPostHistory.updated_id);
                }
                catch (e) {
                    break;
                }
            }
            const current_post = { post, editor: editor_user || editor_employee };
            return { current_post, history: object };
        });
    }
    getList(option = {
        limit: config_1.config.database.defaultPageSize,
        offset: 0,
        scope: ['defaultScope']
    }) {
        return __awaiter(this, void 0, void 0, function* () {
            option.filter['updated_id'] = null;
            return yield this.exec(this.modelWithScope(option.scope)
                .findAndCountAll(this.applyFindOptions(option)));
        });
    }
}
exports.PostService = PostService;
//# sourceMappingURL=postService.js.map