import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { userController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'
import * as _ from 'lodash'
export default class UserRouter extends CrudRouter<typeof userController> {
    constructor() {
        super(userController)

    }
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
        return [authInfoMiddleware.run()]
    }
    deleteAllMiddlewares(): any[] {
        return [blockMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [authInfoMiddleware.run()]
    }
}