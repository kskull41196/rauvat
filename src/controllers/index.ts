import { CrudController } from './crudController'
import { AuthController } from './authController'

import {
    UserCrudController
} from './crud/userCrudController'
import {
    PostCrudController
} from './crud/postCrudController'
import {
    ProductCrudController
} from './crud/productCrudController'
import {
    Global_areaCrudController
} from './crud/global_areaCrudController'
import {
    Bill_itemCrudController
} from './crud/bill_itemCrudController'
import {
    Bill_activityCrudController
} from './crud/bill_activityCrudController'
import {
    BillCrudController
} from './crud/billCrudController'
import {
    LikeCrudController
} from './crud/likeCrudController'
import {
    CommentCrudController
} from './crud/commentCrudController'
import {
    RateCrudController
} from './crud/rateCrudController'
import {
    Global_promotionCrudController
} from './crud/global_promotionCrudController'
import {
    WalletCrudController
} from './crud/walletCrudController'
import {
    Wallet_importCrudController
} from './crud/wallet_importCrudController'
import {
    Wallet_exportCrudController
} from './crud/wallet_exportCrudController'



const authController = new AuthController()

// Crud

const userController = new UserCrudController()
const postController = new PostCrudController()
const productController = new ProductCrudController()
const global_areaController = new Global_areaCrudController()
const bill_itemController = new Bill_itemCrudController()
const bill_activityController = new Bill_activityCrudController()
const billController = new BillCrudController()
const likeController = new LikeCrudController()
const rateController = new RateCrudController()
const commentController = new CommentCrudController()
const global_promotionController = new Global_promotionCrudController()
const walletController = new WalletCrudController()
const wallet_importController = new Wallet_importCrudController()
const wallet_exportController = new Wallet_exportCrudController()

export {
    CrudController,
    authController,
    userController,
    postController,
    productController,
    global_areaController,
    bill_itemController,
    billController,
    global_promotionController,
    bill_activityController,
    likeController,
    rateController,
    commentController,
    walletController,
    wallet_importController,
    wallet_exportController,
}