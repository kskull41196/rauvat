import { CrudRouter } from '../crud'
import { Request, Response, BaseRouter } from '../base'
import { queryMiddleware, authInfoMiddleware, blockMiddleware } from '@/middlewares'
import * as multer from 'multer'
import * as fs from 'fs'
import * as express from 'express'
import { config } from '@/config'
import * as _ from 'lodash'
import {
    errorService,
} from '@/services'
const IMAGE_URL_LOCAL = `${config.server.protocol}://${config.server.host}:${config.server.port}` + '/api/v1/image/get/'
const IMAGE_URL_SERVER = `${config.server.protocol}://${config.server.host}` + '/api/v1/image/get/'
const TYPE_IMAGE = '.png'
const FILE_IMAGE_PATH = 'image/'
export default class ImageRouter extends BaseRouter {
    router: express.Router
    constructor() {
        super()
        this.router = express.Router()
        var storage = multer.diskStorage({
            destination: function (req: Request, file: any, cb: any) {
                cb(null, FILE_IMAGE_PATH)
            },
            filename: function (req: Request, file: any, cb: any) {
                cb(null, file.fieldname + '-' + Date.now() + TYPE_IMAGE)
            }
        })
        var upload = multer({ storage: storage })
        this.router.get('/get/:filename', this.route(this.getImage));
        this.router.post('/upload/', this.updateImageMiddlewares(), upload.single("image"), this.route(this.updateAvatar))
    }
    async updateAvatar(req: Request, res: Response) {
        var imageUrl = IMAGE_URL_SERVER;
        if (config.server.host == "localhost") {
            imageUrl = IMAGE_URL_LOCAL;
        }
        const result = imageUrl + req.file.filename
        this.onSuccess(res, { url: result })
    }
    async getImage(req: Request, res: Response) {
        const { filename } = req.params

        fs.readFile(FILE_IMAGE_PATH + filename, function (err, data) {
            if (err) throw errorService.database.queryFail(err.message)
            else {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.end(data);
            }
        });
    }
    updateImageMiddlewares(): any[] {
        return [authInfoMiddleware.run()]
    }
    getListMiddlewares(): any[] {
        return [queryMiddleware.run()]
    }
    getItemMiddlewares(): any[] {
        return [queryMiddleware.run()]
    }
    updateMiddlewares(): any[] {
        return [authInfoMiddleware.run()]
    }
    deleteMiddlewares(): any[] {
        // return [blockMiddleware.run()]
        return []
    }
    deleteAllMiddlewares(): any[] {
        return [blockMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [blockMiddleware.run()]
    }
}