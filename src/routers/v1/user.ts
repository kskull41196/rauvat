import { CrudRouter } from '../crud'
import { Request, Response } from '../base'
import { userController } from '@/controllers'
import { queryMiddleware,authInfoMiddleware } from '@/middlewares'
import * as jwt from 'jsonwebtoken'
import { token } from 'morgan';
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
        this.router.post('/login',this.route(this.login))     
       
    }
    updatehinhMiddlewares(): any[] {
        return [
             authInfoMiddleware.run()
        ]
    }
    async updateavatar(req: Request, res: Response){
        const { id } = req.params
        const result = await this.controller.update( 
            {avatar : req.file.filename},{filter: { id }}            
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

    async login(req: Request, res: Response) {
        const dulieuLayDc = await userController.check_login(req.body)
        if(dulieuLayDc['username'] == undefined && dulieuLayDc['password'] == undefined){
            res.status(401).json({
                message:"Vui lòng kiểm tra lại Tài khoản hoặc mật khẩu"
            });
        }else{
            jwt.sign({dulieuLayDc},'caco3+hno3',{ expiresIn:60*24*60*60},(err:any,token:any)=>{
                this.onSuccess(res,
                    {
                        code: 200,

                        results:    {
                            id:dulieuLayDc['id'],
                            
                            status:dulieuLayDc['status'],
                            created_at:dulieuLayDc['created_at'],
                            updated_at:dulieuLayDc['updated_at'],
                            deleted_at:dulieuLayDc['deleted_at'],
                            token: token  
                        }
                         
                    }
                    
                    
                
                )
            });
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
        return [authInfoMiddleware.run()]
    }
    createMiddlewares(): any[] {
        return [authInfoMiddleware.run()]
    }
}