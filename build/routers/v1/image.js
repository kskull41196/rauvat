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
const base_1 = require("../base");
const middlewares_1 = require("@/middlewares");
const multer = require("multer");
const fs = require("fs");
const express = require("express");
const config_1 = require("@/config");
const services_1 = require("@/services");
const IMAGE_URL_LOCAL = `${config_1.config.server.protocol}://${config_1.config.server.host}:${config_1.config.server.port}` + '/api/v1/image/get/';
const IMAGE_URL_SERVER = `${config_1.config.server.protocol}://${config_1.config.server.host}` + '/api/v1/image/get/';
const TYPE_IMAGE = '.png';
const FILE_IMAGE_PATH = 'image/';
class ImageRouter extends base_1.BaseRouter {
    constructor() {
        super();
        this.router = express.Router();
        var storage = multer.diskStorage({
            destination: function (req, file, cb) {
                cb(null, FILE_IMAGE_PATH);
            },
            filename: function (req, file, cb) {
                cb(null, file.fieldname + '-' + Date.now() + TYPE_IMAGE);
            }
        });
        var upload = multer({ storage: storage });
        this.router.get('/get/:filename', this.route(this.getImage));
        this.router.post('/upload/', this.updateImageMiddlewares(), upload.single("image"), this.route(this.updateAvatar));
    }
    updateAvatar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            var imageUrl = IMAGE_URL_SERVER;
            if (config_1.config.server.host == "localhost") {
                imageUrl = IMAGE_URL_LOCAL;
            }
            const result = imageUrl + req.file.filename;
            this.onSuccess(res, { url: result });
        });
    }
    getImage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { filename } = req.params;
            fs.readFile(FILE_IMAGE_PATH + filename, function (err, data) {
                if (err)
                    throw services_1.errorService.database.queryFail(err.message);
                else {
                    res.writeHead(200, { 'Content-Type': 'image/png' });
                    res.end(data);
                }
            });
        });
    }
    updateImageMiddlewares() {
        return [middlewares_1.authInfoMiddleware.run()];
    }
    getListMiddlewares() {
        return [middlewares_1.queryMiddleware.run()];
    }
    getItemMiddlewares() {
        return [middlewares_1.queryMiddleware.run()];
    }
    updateMiddlewares() {
        return [middlewares_1.authInfoMiddleware.run()];
    }
    deleteMiddlewares() {
        // return [blockMiddleware.run()]
        return [];
    }
    deleteAllMiddlewares() {
        return [middlewares_1.blockMiddleware.run()];
    }
    createMiddlewares() {
        return [middlewares_1.blockMiddleware.run()];
    }
}
exports.default = ImageRouter;
//# sourceMappingURL=image.js.map