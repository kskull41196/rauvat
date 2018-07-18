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
const services_1 = require("@/services");
class FavoritePostService extends crudService_pg_1.CrudService {
    constructor() {
        super(tables_1.FavoritePost);
    }
    addFavoritePost(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultFavoritePost = yield this.model.count({
                where: {
                    user_id: params.user_id,
                    post_id: params.post_id
                }
            });
            if (resultFavoritePost == 1) {
                throw services_1.errorService.database.queryFail("Người dùng đã yêu thích bài viết này");
            }
            else {
                return yield this.exec(this.model.create(params, this.applyCreateOptions(option)));
            }
        });
    }
    removeFavoritePost(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            const resultFavoritePost = yield this.model.count({
                where: {
                    user_id: params.user_id,
                    post_id: params.post_id
                }
            });
            if (resultFavoritePost == 0) {
                throw services_1.errorService.database.queryFail("Người dùng chưa yêu thích bài viết này");
            }
            else {
                const item = yield this.exec(this.model.findOne({ where: { user_id: params.user_id, post_id: params.post_id } }), { allowNull: false });
                return yield this.exec(item.destroy());
            }
        });
    }
}
exports.FavoritePostService = FavoritePostService;
//# sourceMappingURL=favoritePostService.js.map