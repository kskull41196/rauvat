import { BaseMiddleware } from './base'
import { errorService, tokenService, ICrudOption } from '@/services'
import * as express from 'express'
import { Request, Response } from '@/routers/base'
import * as jwt from 'jsonwebtoken'
export class AuthInfoMiddleware extends BaseMiddleware {
  async use(req: Request, res: Response, next: express.NextFunction, providers: string[] = []) {
   
    
    if (req.headers["authorization"]!=='undefined') {
      const bearerHeader = req.headers["authorization"].toString()
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
      

        jwt.verify(bearerToken,'caco3+hno3',(err:any,authData:any)=>{
          console.log(err)
          if(err){
            throw errorService.auth.unauthorized();
          }else{
            next()
          }
      });
    } else {
        throw errorService.auth.unauthorized();
    }
  }
}