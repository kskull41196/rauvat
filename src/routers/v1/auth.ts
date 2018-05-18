import { CrudRouter } from '../crud'
import { errorService } from '@/services'
import * as express from 'express'
import { Request, Response, BaseRouter } from '../base'
import { authController } from '@/controllers';
import { userController } from '@/controllers'
import * as jwt from 'jsonwebtoken'
import { token } from 'morgan';
import * as crypto from 'crypto'
export default class AuthRouter extends BaseRouter {
    router: express.Router
    constructor() {
        super()
        this.router = express.Router()
        this.router.post('/login',this.route(this.login))     
        this.router.post('/register/', this.route(this.checkcreateUser));
        this.router.put('/forgetpass/', this.route(this.getpassword));
    }
    async getpassword(req: Request, res: Response){       
        var bampass = crypto.createHash('md5').update(req.body.password).digest('hex')    
        req.body.password = bampass;
        const result = await userController.getpassword(req.body)
        this.onSuccess(res, result)
    }
    async checkcreateUser(req: Request, res: Response){      
        req.body.fullname = "Cập nhật";
        req.body.sex = "Other";
        req.body.birthday = new Date();;
        req.body.address = "T.Ô.I";
        req.body.user_type = "Normal";
        req.body.email = "Cập nhật";
        req.body.amount_of_like = 0;
        req.body.amount_of_comment = 0;
        req.body.amount_of_order = 0;
        req.body.amount_of_purchase = 0;
        
        const result = await userController.createUser(req.body)
        if(result['isDuplicated'] == false ){
            res.status(401).json({
                code: 401,
                error:result['resultString']
            });
        }else{
        
        this.onSuccess(res, result)
        }
    }

    async login(req: Request, res: Response) {
        var bampass = crypto.createHash('md5').update(req.body.password).digest('hex')  
        req.body.password = bampass
        const dulieuLayDc = await userController.check_login(req.body)
        if(dulieuLayDc['username'] == undefined && dulieuLayDc['password'] == undefined){
            res.status(401).json({            
                code: 401,
                error:"Vui lòng kiểm tra lại Tài khoản hoặc mật khẩu"
            });
        }else{
            jwt.sign({dulieuLayDc},'caco3+hno3',{ expiresIn:60*24*60*60},(err:any,token:any)=>{
                this.onSuccess(res,
                    {
                        
                        
                            id:dulieuLayDc['id'],
                            fullname:dulieuLayDc['fullname'],
                            avatar:dulieuLayDc['avatar'],
                            sex:dulieuLayDc['sex'],
                            birthday:dulieuLayDc['birthday'],
                            phone:dulieuLayDc['phone'],
                            address:dulieuLayDc['address'],
                            longitude:dulieuLayDc['longitude'],
                            latitude:dulieuLayDc['latitude'],
                            user_type:dulieuLayDc['user_type'],
                            email:dulieuLayDc['email'],
                            amount_of_like:dulieuLayDc['amount_of_like'],
                            amount_of_comment:dulieuLayDc['amount_of_comment'],
                            amount_of_order:dulieuLayDc['amount_of_order'],
                            amount_of_purchase:dulieuLayDc['amount_of_purchase'], 
                            status:dulieuLayDc['status'],
                            created_at:dulieuLayDc['created_at'],
                            updated_at:dulieuLayDc['updated_at'],
                            deleted_at:dulieuLayDc['deleted_at'],
                            token: token  
                        
                         
                    }
                    
                    
                
                )
            });
        }
    }
} 