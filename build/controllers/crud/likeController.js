"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crudController_1 = require("../crudController");
const services_1 = require("@/services");
class LikeController extends crudController_1.CrudController {
    constructor() {
        super(services_1.likeService);
    }
}
exports.LikeController = LikeController;
//# sourceMappingURL=likeController.js.map