import { BaseMiddleware } from './base'
import { errorService, tokenService, ICrudOption } from '@/services'
import * as express from 'express'
import { Request, Response } from '@/routers/base'
export class UserRoleMiddleware extends BaseMiddleware {
  async use(req: Request, res: Response, next: express.NextFunction, providers: string[] = []) {


    if (req.tokenInfo) {
      if (providers.indexOf(req.tokenInfo.role) > -1)
        next()
      else {
        throw errorService.auth.permissionDeny();
      }
    } else {
      throw errorService.auth.unauthorized();
    }
  }
}