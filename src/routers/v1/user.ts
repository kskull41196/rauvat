import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { userController } from '@/controllers'
import { queryMiddleware,authInfoMiddleware, blockMiddleware } from '@/middlewares'
import * as multer from 'multer'
import * as fs from 'fs'
import * as express from 'express'
export default class Sinhvienrouter extends CrudRouter<typeof userController> {
    constructor() {
        super(userController)

    }
    customRouting() {
        this.router = express.Router();
        var storage = multer.diskStorage({
            destination: function(req:Request,file:any,cb:any){
                cb(null,'avatar/')
            },
            filename: function(req:Request,file:any,cb:any){
                cb(null, file.fieldname + '-' + Date.now()+'.png')
            }
        })
        var upload = multer({storage:storage})
        this.router.get('/image/:filename', this.route(this.layhinh));
        this.router.put('/avatar/:id', this.updatehinhMiddlewares(), upload.single("avatar"), this.route(this.updateavatar))
    }
    updatehinhMiddlewares(): any[] {
        return [
             authInfoMiddleware.run()
        ]
    }
    async updateavatar(req: Request, res: Response){
        const { id } = req.params
        const result = await this.controller.update( 
            {avatar :'https://rauvat.herokuapp.com/api/v1/user/image/'+req.file.filename},{filter: { id }}            
        )
        this.onSuccess(res, result)
}
// layhinhMiddlewares(): any[] {
//     return [
//          authInfoMiddleware.run()
//     ]
// }
    async layhinh(req: Request, res: Response){
        const { filename } = req.params
        
        fs.readFile('avatar/'+filename, function(err, data) {
            if (err) throw err; 
            else {
                res.writeHead(200,{'Content-Type': 'image/png'});
              res.end(data);
            }
          });
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
        return [blockMiddleware.run()]
    }
    deleteAllMiddlewares(): any[] {
        return [blockMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [blockMiddleware.run()]
    }
}