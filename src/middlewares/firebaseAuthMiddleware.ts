import { BaseMiddleware } from './base'
import {
    errorService, tokenService, ICrudOption, firebaseService
} from '@/services'
import * as express from 'express'
import { config } from '@/config'
import { CONST } from '@/config/const'
import { Request, Response } from '@/routers/base'
export class FirebaseAuthInfoMiddleware extends BaseMiddleware {
    async use(req: Request, res: Response, next: express.NextFunction, providers: string[]) {
        if (req.headers["access_token"]) {
            const firebaseToken = req.headers["access_token"] as string
            req.firebaseUserInfo = await firebaseService.verifyIdToken(firebaseToken)
            next()
        } else {
            throw errorService.auth.unauthorized();
        }
    }
}