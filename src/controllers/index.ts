import { CrudController } from './crudController'
import { AuthController } from './authController'

import {
    UserController
} from './crud/userController'
import {
    PostController
} from './crud/postController'
import {
    ProductController
} from './crud/productController'
import {
    GlobalareaController
} from './crud/globalareaController'
import {
    BillitemController
} from './crud/billitemController'
import {
    BillactivityController
} from './crud/billactivityController'
import {
    BillController
} from './crud/billController'
import {
    LikeController
} from './crud/likeController'
import {
    CommentController
} from './crud/commentController'
import {
    RateController
} from './crud/rateController'
import {
    GlobalpromotionController
} from './crud/globalpromotionController'
import {
    WalletController
} from './crud/walletController'
import {
    WalletimportController
} from './crud/walletimportController'
import {
    WalletexportController
} from './crud/walletexportController'



const authController = new AuthController()

// Crud

const userController = new UserController()
const postController = new PostController()
const productController = new ProductController()
const globalAreaController = new GlobalareaController()
const billItemController = new BillitemController()
const billActivityController = new BillactivityController()
const billController = new BillController()
const likeController = new LikeController()
const rateController = new RateController()
const commentController = new CommentController()
const globalPromotionController = new GlobalpromotionController()
const walletController = new WalletController()
const walletImportController = new WalletimportController()
const walletExportController = new WalletexportController()

export {
    CrudController,
    authController,
    userController,
    postController,
    productController,
    globalAreaController,
    billItemController,
    billController,
    globalPromotionController,
    billActivityController,
    likeController,
    rateController,
    commentController,
    walletController,
    walletImportController,
    walletExportController,
}