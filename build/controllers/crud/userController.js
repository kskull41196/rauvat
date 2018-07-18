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
const crudController_1 = require("../crudController");
const services_1 = require("@/services");
const base_1 = require("@/models/base");
class UserController extends crudController_1.CrudController {
    constructor() {
        super(services_1.userService);
    }
    checkLogin(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.checkLogin(params, option);
        });
    }
    getPassword(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.getPassword(params, option);
        });
    }
    sendNotification(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.sendNotification(params, option);
        });
    }
    updateRegistrationId(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.updateRegistrationId(params, option);
        });
    }
    checkUsername(params, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.checkUsername(params, option);
        });
    }
    getBills(user_id, option) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield services_1.billService.getList({
                filter: {
                    $or: [
                        {
                            buyer_id: user_id
                        },
                        {
                            seller_id: user_id
                        }
                    ]
                },
                include: [
                    {
                        association: 'activity'
                    },
                    {
                        association: 'items'
                    }
                ],
                attributes: {
                    include: [
                        [base_1.sequelize.where(base_1.sequelize.col('buyer_id'), user_id), 'is_buy']
                    ]
                },
                offset: option.offset,
                limit: option.limit
            });
        });
    }
    upgrade(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.upgrade(params);
        });
    }
    downgrade(params) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this.service.downgrade(params);
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=userController.js.map