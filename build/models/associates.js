"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tables_1 = require("@/models/tables");
//report
tables_1.Report.belongsTo(tables_1.User, {
    foreignKey: 'user_id',
    as: 'user'
});
tables_1.User.hasMany(tables_1.Report, {
    foreignKey: 'user_id',
    as: 'reports'
});
//Notification
tables_1.Notification.belongsTo(tables_1.User, {
    foreignKey: 'user_id',
    as: 'user'
});
tables_1.User.hasMany(tables_1.Notification, {
    foreignKey: 'user_id',
    as: 'notifications'
});
//post
tables_1.Post.belongsTo(tables_1.User, {
    foreignKey: 'user_id',
    as: 'user'
});
tables_1.User.hasMany(tables_1.Post, {
    foreignKey: 'user_id',
    as: 'posts'
});
//product
tables_1.Product.belongsTo(tables_1.User, {
    foreignKey: 'user_id',
    as: 'user'
});
tables_1.User.hasMany(tables_1.Product, {
    foreignKey: 'user_id',
    as: 'products'
});
tables_1.Product.belongsTo(tables_1.GlobalArea, {
    foreignKey: 'global_area_id',
    as: 'global_area'
});
tables_1.GlobalArea.hasMany(tables_1.Product, {
    foreignKey: 'global_area_id',
    as: 'products'
});
tables_1.Product.belongsTo(tables_1.GlobalCategory, {
    foreignKey: 'global_category_id',
    as: 'global_category'
});
tables_1.GlobalCategory.hasMany(tables_1.Product, {
    foreignKey: 'global_category_id',
    as: 'products'
});
//Category & Attribute
tables_1.GlobalCategoryAndAttribute.belongsTo(tables_1.GlobalCategory, {
    foreignKey: 'global_category_id',
    as: 'category'
});
tables_1.GlobalCategory.hasMany(tables_1.GlobalCategoryAndAttribute, {
    foreignKey: 'global_category_id',
    as: 'attributes'
});
tables_1.GlobalCategoryAndAttribute.belongsTo(tables_1.GlobalAttribute, {
    foreignKey: 'global_attribute_id',
    as: 'attribute'
});
tables_1.GlobalAttribute.hasMany(tables_1.GlobalCategoryAndAttribute, {
    foreignKey: 'global_category_id',
    as: 'categories'
});
//FavoriteProduct
tables_1.FavoriteProduct.belongsTo(tables_1.User, {
    foreignKey: 'user_id',
    as: 'user'
});
tables_1.User.hasMany(tables_1.FavoriteProduct, {
    foreignKey: 'user_id',
    as: 'favorite_products'
});
tables_1.FavoriteProduct.belongsTo(tables_1.Product, {
    foreignKey: 'product_id',
    as: 'product'
});
tables_1.Product.hasMany(tables_1.FavoriteProduct, {
    foreignKey: 'product_id',
    as: 'favorites'
});
//FavoritePost
tables_1.FavoritePost.belongsTo(tables_1.User, {
    foreignKey: 'user_id',
    as: 'user'
});
tables_1.User.hasMany(tables_1.FavoritePost, {
    foreignKey: 'user_id',
    as: 'favorite_posts'
});
tables_1.FavoritePost.belongsTo(tables_1.Post, {
    foreignKey: 'post_id',
    as: 'post'
});
tables_1.Post.hasMany(tables_1.FavoritePost, {
    foreignKey: 'post_id',
    as: 'favorites'
});
//Product_Post
tables_1.ProductPost.belongsTo(tables_1.Post, {
    foreignKey: 'post_id',
    as: 'post'
});
tables_1.Post.hasMany(tables_1.ProductPost, {
    foreignKey: 'post_id',
    as: 'products'
});
tables_1.ProductPost.belongsTo(tables_1.Product, {
    foreignKey: 'product_id',
    as: 'product'
});
tables_1.Product.hasMany(tables_1.ProductPost, {
    foreignKey: 'product_id',
    as: 'posts'
});
//BillItem
tables_1.BillItem.belongsTo(tables_1.Product, {
    foreignKey: 'product_id',
    as: 'product'
});
tables_1.Product.hasMany(tables_1.BillItem, {
    foreignKey: 'product_id',
    as: 'bill_items'
});
tables_1.BillItem.belongsTo(tables_1.Bill, {
    foreignKey: 'bill_id',
    as: 'bill'
});
tables_1.Bill.hasMany(tables_1.BillItem, {
    foreignKey: 'bill_id',
    as: 'items'
});
//BillActivity
tables_1.BillActivity.belongsTo(tables_1.Bill, {
    foreignKey: 'bill_id',
    as: 'bill'
});
tables_1.Bill.hasMany(tables_1.BillActivity, {
    foreignKey: 'bill_id',
    as: 'activities'
});
//bill
tables_1.Bill.belongsTo(tables_1.User, {
    foreignKey: 'buyer_id',
    as: 'buyer'
});
tables_1.User.hasMany(tables_1.Bill, {
    foreignKey: 'buyer_id',
    as: 'bill_buyers'
});
tables_1.Bill.belongsTo(tables_1.User, {
    foreignKey: 'seller_id',
    as: 'seller'
});
tables_1.User.hasMany(tables_1.Bill, {
    foreignKey: 'seller_id',
    as: 'bill_sellers'
});
tables_1.Bill.belongsTo(tables_1.GlobalPromotion, {
    foreignKey: 'promotion_id',
    as: 'global_promotion'
});
tables_1.GlobalPromotion.hasMany(tables_1.Bill, {
    foreignKey: 'promotion_id',
    as: 'bills'
});
tables_1.Bill.belongsTo(tables_1.BillActivity, {
    foreignKey: 'current_bill_activity_id',
    as: 'activity'
});
tables_1.Bill.belongsTo(tables_1.PaidHistory, {
    foreignKey: 'current_paid_history_id',
    as: 'paid_history'
});
//like
tables_1.Like.belongsTo(tables_1.User, {
    foreignKey: 'user_id',
    as: 'user'
});
tables_1.User.hasMany(tables_1.Like, {
    foreignKey: 'user_id',
    as: 'likes'
});
//rate
tables_1.Rate.belongsTo(tables_1.User, {
    foreignKey: 'user_id',
    as: 'user'
});
tables_1.User.hasMany(tables_1.Rate, {
    foreignKey: 'user_id',
    as: 'rates'
});
//comment
tables_1.Comment.belongsTo(tables_1.User, {
    foreignKey: 'user_id',
    as: 'user'
});
tables_1.User.hasMany(tables_1.Comment, {
    foreignKey: 'user_id',
    as: 'comments'
});
//user
tables_1.User.hasOne(tables_1.Wallet, {
    foreignKey: 'user_id',
    as: 'wallet'
});
tables_1.Wallet.belongsTo(tables_1.User, {
    foreignKey: 'user_id',
    as: 'user'
});
tables_1.User.hasOne(tables_1.UserSetting, {
    foreignKey: 'user_id',
    as: 'user_setting'
});
tables_1.UserSetting.belongsTo(tables_1.User, {
    foreignKey: 'user_id',
    as: 'user'
});
tables_1.User.hasOne(tables_1.Store, {
    foreignKey: 'user_id',
    as: 'store'
});
tables_1.Store.belongsTo(tables_1.User, {
    foreignKey: 'user_id',
    as: 'user'
});
//wallet_import
tables_1.WalletImport.belongsTo(tables_1.Wallet, {
    foreignKey: 'wallet_id',
    as: 'wallet'
});
tables_1.Wallet.hasMany(tables_1.WalletImport, {
    foreignKey: 'wallet_id',
    as: 'imports'
});
tables_1.WalletImport.belongsTo(tables_1.Employee, {
    foreignKey: 'employee_id',
    as: 'employee'
});
tables_1.Employee.hasMany(tables_1.WalletImport, {
    foreignKey: 'employee_id',
    as: 'wallet_imports'
});
//wallet_export
tables_1.WalletExport.belongsTo(tables_1.Wallet, {
    foreignKey: 'wallet_id',
    as: 'wallet'
});
tables_1.Wallet.hasMany(tables_1.WalletExport, {
    foreignKey: 'wallet_id',
    as: 'exports'
});
tables_1.WalletExport.belongsTo(tables_1.Employee, {
    foreignKey: 'employee_id',
    as: 'employee'
});
tables_1.Employee.hasMany(tables_1.WalletExport, {
    foreignKey: 'employee_id',
    as: 'Wallet_exports'
});
//paid_histry
tables_1.PaidHistory.belongsTo(tables_1.Bill, {
    foreignKey: 'bill_id',
    as: 'bill'
});
tables_1.Bill.hasMany(tables_1.PaidHistory, {
    foreignKey: 'bill_id',
    as: 'paid_histories'
});
// History Membership
tables_1.HistoryMembership.belongsTo(tables_1.User, {
    foreignKey: 'user_id',
    as: 'user'
});
tables_1.User.hasMany(tables_1.HistoryMembership, {
    foreignKey: 'user_id',
    as: 'history_memberships'
});
// ProductGlobalAttribute
tables_1.ProductGlobalAttribute.belongsTo(tables_1.Product, {
    foreignKey: 'product_id',
    as: 'product'
});
tables_1.Product.hasMany(tables_1.ProductGlobalAttribute, {
    foreignKey: 'product_id',
    as: 'global_attributes'
});
tables_1.ProductGlobalAttribute.belongsTo(tables_1.GlobalAttribute, {
    foreignKey: 'global_attribute_id',
    as: 'global_attribute'
});
tables_1.GlobalAttribute.hasMany(tables_1.ProductGlobalAttribute, {
    foreignKey: 'global_attribute_id',
    as: 'products'
});
// Vnpay History
tables_1.PaidHistory.belongsTo(tables_1.VnpayHistory, {
    foreignKey: 'vnpay_history_id',
    as: 'vnpay_history'
});
tables_1.VnpayHistory.hasOne(tables_1.PaidHistory, {
    foreignKey: 'vnpay_history_id',
    as: 'paid_history'
});
console.log('run associates');
//# sourceMappingURL=associates.js.map