import { BaseMiddleware } from './base'
import { errorService, tokenService, ICrudOption } from '@/services'
import * as express from 'express'
import { Request, Response } from '@/routers/base'
const HEADERS = 'authorization'
export class AdminAuthInfoMiddleware extends BaseMiddleware {
  async use(req: Request, res: Response, next: express.NextFunction, providers: string[] = []) {
    if (req.tokenInfo) {
      if (req.tokenInfo.role === 'ADMIN')
        next()
      else throw errorService.auth.permissionDeny();
    }
    else throw errorService.auth.badToken();
  }
}