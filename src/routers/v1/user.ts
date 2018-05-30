import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { userController } from '@/controllers'
import { authInfoMiddleware, queryMiddleware, blockMiddleware } from '@/middlewares'
import * as _ from 'lodash'
export default class UserRouter extends CrudRouter<typeof userController> {
    constructor() {
        super(userController)

    }
    editUserMiddlewares(): any[] {
        return [authInfoMiddleware.run()]
    }
    async update(req: Request, res: Response){       
        const { id } = req.params
        const result = await this.controller.update(req.body, {
            filter: { id }
        })
        if(result['error_username'] == true){
            res.status(401).json({            
                code: 401,
                error:"Không được thay đổi Username"
            });
        }else{
        
        this.onSuccess(res, result)
        }
    }
    async create(req: Request, res: Response) {
        req.body.user_type = "Normal";
        req.body.amount_of_like = 0;
        req.body.amount_of_comment = 0;
        req.body.amount_of_order = 0;
        req.body.amount_of_purchase = 0;
    const result = await this.controller.create(req.body)
    if (result['isDuplicated'] == false) {
        res.status(401).json({
            code: 401,
            error: result['resultString']
        });
    } else {

        this.onSuccess(res, result)
    }
}
    async getList(req: Request, res: Response) {
        var objects = await this.controller.getList(req.queryInfo)
        if (objects.toJSON) {
            objects = objects.toJSON()
        }
        var resultNotPass = Object.assign({
            objects
        }, undefined)
        var rowJson = resultNotPass.objects.rows;
        for (var i = 0; i < rowJson.length; i++) {
            var jsonObject = rowJson[i].dataValues;
            delete jsonObject["password"]
            resultNotPass.objects.rows[i].dataValues = jsonObject;
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
        var objects = await this.controller.getItem(req.queryInfo)
        objects = objects || {}
        var resultNotPass = Object.assign({
            objects
        }, undefined)
        var rowJson = resultNotPass.objects;
        
            var jsonObject = rowJson.dataValues;
            delete jsonObject["password"]
            resultNotPass.objects.dataValues = jsonObject;
        
        if (Object.keys(objects).length === 0) {
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
        return []
    }
}