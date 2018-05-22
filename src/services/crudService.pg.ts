import {
    errorService,
} from '@/services'
import { BaseError } from '@/services/errors'
import { config } from '@/config'
import { Sequelize, sequelize } from '@/models'
export interface ICrudOption {
    filter?: any
    limit?: number
    offset?: number
    scope?: string[]
    order?: any[]
    attributes?: any[]
    includes?: any[]
    distinct?: boolean
    paranoid?: boolean
    transaction?: any

    [key: string]: any
}
export interface ICrudExecOption {
    allowNull?: boolean
}
export class CrudService<T extends Sequelize.Model<{}, {}>> {
    constructor(model: T) {
        this.model = model
    }
    model: T
    async transaction() {
        return await sequelize.transaction()
    }
    async exec(promise: any, option: ICrudExecOption = { allowNull: true }) {
        try {
            let result = await promise
            if ((result === undefined || result === null) && !option.allowNull)
                throw errorService.database.recordNotFound()
            return result;
        } catch (err) {
            if (err instanceof BaseError) throw err
            if (config.server.debug) {
                if (err.errors && err.errors[0]) {
                    throw errorService.database.queryFail(err.errors[0].message)
                } else {
                    throw errorService.database.queryFail(err.message)
                }
            } else {
                throw errorService.router.somethingWentWrong()
            }
        }
    }
    async getList(option: ICrudOption = {
        limit: config.database.defaultPageSize,
        offset: 0,
        scope: ['defaultScope']
    }) {
        return await this.exec(
            this.modelWithScope(option.scope)
                .findAndCountAll(this.applyFindOptions(option))
        )
    }
    async getItem(option: ICrudOption = {
        scope: ['defaultScope']
    }) {
        return await this.exec(
            this.modelWithScope(option.scope)
                .findOne(this.applyFindOptions(option))
            , { allowNull: false })
    }
    async create(params: any, option?: ICrudOption) {
        return await this.exec(
            this.model.create(params, this.applyCreateOptions(option))
        )
    }
    async update(params: any, option?: ICrudOption) {
        const item = await this.exec(this.model.findById(option.filter.id), { allowNull: false })
        await this.exec(item.update(params))
        return await this.getItem(option)
    }
    async delete(option?: ICrudOption) {
        const item = await this.exec(this.getItem(option), { allowNull: false })
        return await this.exec(item.destroy())
    }
    async deleteAll(option?: ICrudOption) {
        let t = await this.transaction()
        option.transaction = t
        try {
            let result = await this.exec(this.model.destroy(this.applyDestroyOptions(option)))
            t.commit()
            return result;
        } catch (err) {
            t.rollback();
            throw err;
        }
    }
    applyFindOptions(option: ICrudOption = {}) {
        const query: Sequelize.FindOptions<T> = {
            where: option.filter,
            limit: option.limit,
            offset: option.offset,
            order: option.order,
            attributes: option.attributes,
            include: option.include,
            paranoid: option.paranoid,
        }
        return query
    }
    applyCreateOptions(option: ICrudOption = {}) {
        const query: Sequelize.CreateOptions = {
            transaction: option.transaction
        }
        return query
    }
    applyDestroyOptions(option: ICrudOption = {}) {
        const query: Sequelize.DestroyOptions = {
            where: option.filter,
            limit: option.limit,
            transaction: option.transaction
        }
        return query
    }
    modelWithScope(scope: string[]) {
        try {
            return this.model.scope(scope);
        } catch (err) {
            throw errorService.database.invalidScope(err.message);
        }
    }
}