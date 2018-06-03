import { BaseMiddleware } from './base'
import { errorService, tokenService, ICrudOption } from '@/services'
import * as express from 'express'
import { Request, Response } from '@/routers/base'
import * as jwt from 'jsonwebtoken'
const SECRET_KEY = 'caco3+hno3'
const HEADERS = 'authorization'
export class AuthInfoMiddleware extends BaseMiddleware {
  async use(req: Request, res: Response, next: express.NextFunction, providers: string[] = []) {


    if (req.headers[HEADERS] !== 'undefined') {
      const bearerHeader = req.headers[HEADERS].toString()
      const bearer = bearerHeader.split(' ');
      const bearerToken = bearer[1];
      const result = await tokenService.decodeToken(bearerToken);
      req.body.user_from_token = result.payload
      next()
    } else {
      throw errorService.auth.unauthorized();
    }
  }
}