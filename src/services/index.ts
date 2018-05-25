import { ErrorService } from './errorService'
import { TokenService } from './tokenService'
import { UtilService } from './utilService'
import { FirebaseService } from './firebaseService'
import {
    UserService
} from './crud/userService'
import {
    PostService
} from './crud/PostService'
import {
   ProductService
} from './crud/ProductService'
import {
    Global_areaService
 } from './crud/global_areaService'
 import {
    Bill_itemService
 } from './crud/bill_itemService'
 import {
    Bill_activityService
 } from './crud/bill_activityService'
 import {
    BillService
 } from './crud/billService'
 import {
    Global_promotionService
 } from './crud/global_promotionService'
 import {
    LikeService
 } from './crud/likeService'
 import {
    RateService
 } from './crud/rateService'
 import {
    CommentService
 } from './crud/commentService'
 import {
   WalletService
 } from './crud/walletService'
 import {
    Wallet_importService
  } from './crud/wallet_importService'
  import {
    Wallet_exportService
  } from './crud/wallet_exportService'

// Crud
import { ICrudExecOption, ICrudOption, CrudService } from './crudService'
// import { SampleCrudService } from './crud/sampleCrudService.mongo'


const errorService = new ErrorService()
const tokenService = new TokenService()
const utilService = new UtilService()
const firebaseService = new FirebaseService()
const userService = new UserService()
const postService = new PostService()
const productService = new ProductService()
const global_areaService = new Global_areaService()
const bill_itemService = new Bill_itemService()
const bill_activityService = new Bill_activityService()
const billService = new BillService()
const likeService = new LikeService()
const rateService = new RateService()
const commentService = new CommentService()
const global_promotionService = new Global_promotionService()
const walletService = new WalletService()
const wallet_importService = new Wallet_importService()
const wallet_exportService = new Wallet_exportService()

// Crud

export {
    errorService,
    tokenService,
    utilService,
    firebaseService,
    CrudService,
    ICrudExecOption,
    ICrudOption,
    userService,
    postService,
    productService,
    global_areaService,
    bill_itemService,
    bill_activityService,
    global_promotionService,
    billService,
    likeService,
    rateService,
    commentService,
    walletService,
    wallet_importService,
    wallet_exportService
}