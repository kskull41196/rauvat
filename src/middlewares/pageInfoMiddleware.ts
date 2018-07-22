import { BaseMiddleware } from './base'
import { errorService, tokenService, ICrudOption } from '@/services'
import * as express from 'express'
import { Request, Response } from '@/routers/base'

export class PageInfoMiddleware extends BaseMiddleware {
  async use(req: Request, _res: Response, next: express.NextFunction ) {
    // const filter = this._parseFilter(req)
    // const order = this._parseOrder(req)
    const page = parseInt(req.query['page'] || 1)
    const limit = parseInt(req.query['limit'] || 10)
    const offset = parseInt(req.query['offset']) || (page - 1) * limit
    req.pageInfo = {
      //filter,
      limit,
      offset,
      //order,
      page
    }
    next()
  }

  /**
   * Filter param only accept <and> query. <or> will be supported later
   * Format: [[key, operator, value], [key, operator, value]]
   */
  _parseFilter(req: Request) {
    let filter = req.query['filter']
    try {
      filter = JSON.parse(filter)
    } catch (ignore) {
      filter = null
    }
    return filter || {}
  }

  /**
   * Format: [[key, order], [key, order]]
   */
  _parseOrder(req: Request) {
    let order = req.query['order']
    try {
      order = JSON.parse(order)
    } catch (ignore) {
      order = null
    }
    return order || [
      ['updated_at', 'asc']
    ]
  }
}