import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { userController } from '@/controllers'
import { queryMiddleware, authInfoMiddleware, blockMiddleware } from '@/middlewares'
import * as multer from 'multer'
import * as fs from 'fs'
import * as express from 'express'
import { config } from '@/config'
import * as _ from 'lodash'
const IMAGE_URL_LOCAL = `${config.server.protocol}://${config.server.host}:${config.server.port}` + '/api/v1/user/image/'
const IMAGE_URL_SERVER = `${config.server.protocol}://${config.server.host}` + '/api/v1/user/image/'
const TYPE_IMAGE = '.png'
const FILE_IMAGE = 'avatar/'
export default class UserRouter extends CrudRouter<typeof userController> {
    constructor() {
        super(userController)

    }
    customRouting() {
        this.router = express.Router();
        var storage = multer.diskStorage({
            destination: function (req: Request, file: any, cb: any) {
                cb(null, FILE_IMAGE)
            },
            filename: function (req: Request, file: any, cb: any) {
                cb(null, file.fieldname + '-' + Date.now() + TYPE_IMAGE)
            }
        })
        var upload = multer({ storage: storage })
        this.router.get('/image/:filename', this.route(this.getImage));
        this.router.put('/avatar/:id', this.updateImageMiddlewares(), upload.single("avatar"), this.route(this.updateAvatar))
    }


    updateImageMiddlewares(): any[] {
        return [
            authInfoMiddleware.run()
        ]
    }
    async updateAvatar(req: Request, res: Response) {
        const { id } = req.params
        var isLocalHost = false;
        if (config.server.host == "localhost") {
            isLocalHost = true;
        }
        var imageUrl = IMAGE_URL_SERVER;
        if (isLocalHost) {
            imageUrl = IMAGE_URL_LOCAL;
        }
        const result = await this.controller.update(
            { avatar: imageUrl + req.file.filename }, { filter: { id } }
        )
        this.onSuccess(res, result)
    }
    // getImageMiddlewares(): any[] {
    //     return [
    //          authInfoMiddleware.run()
    //     ]
    // }

    async getList(req: Request, res: Response) {
        var result = await this.controller.getList(req.queryInfo)
        if (result.toJSON) {
            result = result.toJSON()
        }
        var resultNotPass = Object.assign({
            result
        }, undefined)
        var rowJson = resultNotPass.result.rows;
        for (var i = 0; i < rowJson.length; i++) {
            var jsonObject = rowJson[i].dataValues;
            delete jsonObject["password"]
            resultNotPass.result.rows[i].dataValues = jsonObject;
        }
        const page = _.floor(req.queryInfo.offset / req.queryInfo.limit) + 1
        res.json({
            code: 200,
            results: resultNotPass,
            pagination: {
                'current_page': page,
                'next_page': page + 1,
                'prev_page': page - 1,
                'limit': req.queryInfo.limit
            }
        })
    }
    async getItem(req: Request, res: Response) {
        const { id } = req.params
        req.queryInfo.filter.id = id
        var result = await this.controller.getItem(req.queryInfo)
        result = result || {}
        var resultNotPass = Object.assign({
            result
        }, undefined)
        var rowJson = resultNotPass.result;
        
            var jsonObject = rowJson.dataValues;
            delete jsonObject["password"]
            resultNotPass.result.dataValues = jsonObject;
        
        if (Object.keys(result).length === 0) {
            res.json({
                code: 200
            })
        } else {
            res.json({
                code: 200,
                results: resultNotPass
            })
        }
    }

    async getImage(req: Request, res: Response) {
        const { filename } = req.params

        fs.readFile(FILE_IMAGE + filename, function (err, data) {
            if (err) throw err;
            else {
                res.writeHead(200, { 'Content-Type': 'image/png' });
                res.end(data);
            }
        });
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
        return[]
    }
    deleteAllMiddlewares(): any[] {
        return [blockMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [blockMiddleware.run()]
    }
}