import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { userController } from '@/controllers'
import {
    authInfoMiddleware,
    queryMiddleware,
    blockMiddleware,
    adminAuthInfoMiddleware,
    userRoleMiddleware
} from '@/middlewares'
import * as _ from 'lodash'
import {
    USER_ROLES
} from '@/const'
export default class UserRouter extends CrudRouter<typeof userController> {
    constructor() {
        super(userController)

    }
    customRouting() {
        this.router.post('/check_username', this.route(this.checkUsername))
        this.router.get('/bills', this.getBillsMiddlewares(), this.route(this.getBills));
        this.router.post('/upgrade', this.upgradeMiddlewares(), this.route(this.upgrade));
        this.router.post('/downgrade', this.downgradeMiddlewares(), this.route(this.downgrade));
    }
    async checkUsername(req: Request, res: Response) {
        const result = await this.controller.checkUsername(req.body)
        if (result['duplicate'] == true) {
            res.status(201).json({
                code: 201,
                results: { object: { message: result['resultOfCheckUser'] } }
            })
        } else {
            this.onSuccess(res, result)
        }
    }
    async update(req: Request, res: Response) {
        const { id } = req.params
        const result = await this.controller.update(req.body, {
            filter: { id }
        })
        this.onSuccess(res, result)
    }
    async create(req: Request, res: Response) {
        if (req.body.fullname == undefined) {
            req.body.fullname = "";
        }
        if (req.body.sex == undefined) {
            req.body.sex = "Other"
        }
        if (req.body.birthday == undefined) {
            req.body.birthday = new Date();
        }
        if (req.body.address == undefined) {
            req.body.address = ""
        }
        if (req.body.email == undefined) {
            req.body.email = ""
        }
        const result = await userController.create(req.body)
        this.onSuccess(res, result)
    }
    async getList(req: Request, res: Response) {
        let objects = await this.controller.getList(req.queryInfo)
        if (objects.toJSON) {
            objects = objects.toJSON()
        }
        const resultNotPass = Object.assign({
            objects
        }, undefined)
        const rowJson = resultNotPass.objects.rows;
        for (let i = 0; i < rowJson.length; i++) {
            const jsonObject = rowJson[i].dataValues;
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
        let object = await this.controller.getItem(req.queryInfo)
        object = object || {}
        const resultNotPass = Object.assign({
            object
        }, undefined)
        const rowJson = resultNotPass.object;

        const jsonObject = rowJson.dataValues;
        delete jsonObject["password"]
        resultNotPass.object.dataValues = jsonObject;

        if (Object.keys(object).length === 0) {
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

    getBillsMiddlewares(): any[] {
        return [

            authInfoMiddleware.run()
        ]
    }

    async getBills(req: Request, res: Response) {
        req.pageInfo = {

        }
        req.pageInfo.limit = parseInt(req.query.limit) || 10;
        req.pageInfo.offset = parseInt(req.query.page) || 1;
        req.pageInfo.offset = (req.pageInfo.offset - 1) * req.pageInfo.limit;
        const result = await this.controller.getBills(req.tokenInfo.payload.user_id, req.pageInfo);
        this.onSuccessAsList(res, result, undefined, req.pageInfo);
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
        return [authInfoMiddleware.run(), adminAuthInfoMiddleware.run()]
    }
    deleteAllMiddlewares(): any[] {
        return [authInfoMiddleware.run(), adminAuthInfoMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [authInfoMiddleware.run(), adminAuthInfoMiddleware.run()]
    }

    upgradeMiddlewares(): any[] {
        return [
            authInfoMiddleware.run(),
            adminAuthInfoMiddleware.run()
        ]
    }

    async upgrade(req: Request, res: Response) {
        await this.validateJSON(req.body, {
            type: 'object',
            properties: {
                user_id: {
                    type: 'string',
                    format: 'uuid'
                },
                user_type: {
                    enum: [
                        'SILVER',
                        'GOLD',
                        'DIAMOND'
                    ]
                }
            },
            required: ['user_id', 'user_type']
        })

        const result = await this.controller.upgrade(req.body)
        this.onSuccess(res, result);
    }

    downgradeMiddlewares(): any[] {
        return [
            authInfoMiddleware.run(),
            adminAuthInfoMiddleware.run()
        ]
    }

    async downgrade(req: Request, res: Response) {
        await this.validateJSON(req.body, {
            type: 'object',
            properties: {
                user_id: {
                    type: 'string',
                    format: 'uuid'
                }
            },
            required: ['user_id']
        })

        const result = await this.controller.downgrade(req.body)
        this.onSuccess(res, result);
    }


}