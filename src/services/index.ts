import { ErrorService } from './errorService'
import { TokenService } from './tokenService'
import { UtilService } from './utilService'
import { FirebaseService } from './firebaseService'
import { UserService } from './crud/userService'
import { PostService } from './crud/postService'
import { ProductService } from './crud/productService'
import {
    GlobalAreaService
} from './crud/globalAreaService'
import {
    BillItemService
} from './crud/billItemService'
import {
    BillActivityService
} from './crud/billActivityService'
import {
    BillService
} from './crud/billService'
import {
    GlobalPromotionService
} from './crud/globalPromotionService'
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
    WalletImportService
} from './crud/walletImportService'
import {
    WalletExportService
} from './crud/walletExportService'
import {
    PaidHistoryService
} from './crud/paidHistoryService'
import {
    EmployeeService
} from './crud/employeeService'
import {
    GlobalCategoryService
} from './crud/globalCategoryService'
import {
    GlobalAttributeService
} from './crud/globalAttributeService'
import {
    GlobalCategoryAndAttributeService
} from './crud/globalCategoryAndAttributeService'
import {
    UserSettingService
} from './crud/userSettingService'
import {
    FavoriteProductService
} from './crud/favoriteProductService'
import {
    FavoritePostService
} from './crud/favoritePostService'
import {
    NotificationService
} from './crud/notificationService'
import {
    StoreService
} from './crud/storeService'
import {
    ReportService
} from './crud/reportService'
import {
    ProductPostService
} from './crud/productPostService'
import {
    ExportRequestService
} from './crud/exportRequestService'
import { ProductGlobalAttributeService } from './crud/productGlobalAttributeService'
import { HistoryMembershipService } from './crud/historyMembershipService'
import { VnpayHistoryService } from './crud/vnpayHistoryService'
import { RelationshipHistoryService } from './crud/relationshipHistoryService'
import { FollowingService } from './crud/followingService'
import { RelationshipService } from './crud/relationshipService'

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
const globalAreaService = new GlobalAreaService()
const billItemService = new BillItemService()
const billActivityService = new BillActivityService()
const billService = new BillService()
const likeService = new LikeService()
const rateService = new RateService()
const commentService = new CommentService()
const globalPromotionService = new GlobalPromotionService()
const walletService = new WalletService()
const walletImportService = new WalletImportService()
const walletExportService = new WalletExportService()
const paidHistoryService = new PaidHistoryService()
const employeeService = new EmployeeService()
const globalCategoryService = new GlobalCategoryService()
const globalAttributeService = new GlobalAttributeService()
const globalCategoryAndAttributeService = new GlobalCategoryAndAttributeService()
const userSettingService = new UserSettingService()
const favoriteProductService = new FavoriteProductService()
const favoritePostService = new FavoritePostService()
const historyMembershipService = new HistoryMembershipService()
const productGlobalAttributeService = new ProductGlobalAttributeService()
const notificationService = new NotificationService()
const storeService = new StoreService()
const reportService = new ReportService()
const productPostService = new ProductPostService()
const vnpayHistoryService = new VnpayHistoryService()
const relationshipHistoryService = new RelationshipHistoryService()
const followingService = new FollowingService()
const relationshipService = new RelationshipService()
const exportRequestService = new ExportRequestService()

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
    globalAreaService,
    billItemService,
    billActivityService,
    globalPromotionService,
    billService,
    likeService,
    rateService,
    commentService,
    walletService,
    walletImportService,
    walletExportService,
    paidHistoryService,
    employeeService,
    globalCategoryService,
    globalAttributeService,
    globalCategoryAndAttributeService,
    userSettingService,
    favoriteProductService,
    historyMembershipService,
    productGlobalAttributeService,
    favoritePostService,
    notificationService,
    storeService,
    reportService,
    productPostService,
    vnpayHistoryService,
    relationshipHistoryService,
    followingService,
    relationshipService,
    exportRequestService
}