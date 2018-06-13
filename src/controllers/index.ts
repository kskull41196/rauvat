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
    BillItemController
} from './crud/billItemController'
import {
    BillActivityController
} from './crud/billActivityController'
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
    GlobalPromotionController
} from './crud/globalPromotionController'
import {
    WalletController
} from './crud/walletController'
import {
    WalletImportController
} from './crud/walletImportController'
import {
    WalletExportController
} from './crud/walletExportController'
import {
    PaidHistoryController
} from './crud/paidHistoryController'
import {
    EmployeeController
} from './crud/employeeController'
import {
    GlobalAttributeController
} from './crud/globalAttributeController'
import {
    GlobalCategoryController
} from './crud/globalCategoryController'
import {
    GlobalCategoryAndAttributeController
} from './crud/globalCategoryAndAttributeController'
import {
    UserSettingController
} from './crud/userSettingController'
import {
    FavoriteProductController
} from './crud/favoriteProductController'
import { HistoryMembershipController } from './crud/historyMembershipController'
import { ProductGlobalAttributeController } from './crud/productGlobalAttributeController'



const authController = new AuthController()

// Crud

const userController = new UserController()
const postController = new PostController()
const productController = new ProductController()
const globalAreaController = new GlobalareaController()
const billItemController = new BillItemController()
const billActivityController = new BillActivityController()
const billController = new BillController()
const likeController = new LikeController()
const rateController = new RateController()
const commentController = new CommentController()
const globalPromotionController = new GlobalPromotionController()
const walletController = new WalletController()
const walletImportController = new WalletImportController()
const walletExportController = new WalletExportController()
const paidHistoryController = new PaidHistoryController()
const employeeController = new EmployeeController()
const globalAttributeController = new GlobalAttributeController()
const globalCategoryController = new GlobalCategoryController()
const globalCategoryAndAttributeController = new GlobalCategoryAndAttributeController()
const userSettingController = new UserSettingController()
const favoriteProductController = new FavoriteProductController()
const historyMembershipController = new HistoryMembershipController()
const productGlobalAttributeController = new ProductGlobalAttributeController()


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
    paidHistoryController,
    employeeController,
    globalAttributeController,
    globalCategoryController,
    globalCategoryAndAttributeController,
    userSettingController,
    favoriteProductController,
    historyMembershipController,
    productGlobalAttributeController,
}