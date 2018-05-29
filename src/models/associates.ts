import { 
   
    User,
    Post,
    Product,
    Global_area,
    Bill_item,
    BillActivity,
    Global_promotion,
    Bill,
    Like,
    Comment,
    Rate,
    Wallet,
    Wallet_import,
    Wallet_export,
    Paid_history,
    Employee

 
 } from "@/models/tables";
//post
Post.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});
User.hasMany(Post, {
    foreignKey: 'user_id',
    as: 'post'
});
//product
Product.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});
User.hasMany(Product, {
    foreignKey: 'user_id',
    as: 'product'
});
Product.belongsTo(Global_area, {
    foreignKey: 'global_area_id',
    as: 'global_area'
});
Global_area.hasMany(Product, {
    foreignKey: 'global_area_id',
    as: 'product'
});
//bill_item
Bill_item.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product'
});
Product.hasMany(Bill_item, {
    foreignKey: 'product_id',
    as: 'bill_item'
});
Bill_item.belongsTo(Bill, {
    foreignKey: 'bill_id',
    as: 'bill'
});
Bill.hasMany(Bill_item, {
    foreignKey: 'bill_id',
    as: 'bill_item'
});
//BillActivity
BillActivity.belongsTo(Bill, {
    foreignKey: 'bill_id',
    as: 'bill'
});
Bill.hasMany(BillActivity, {
    foreignKey: 'bill_id',
    as: 'BillActivity'
});
//bill
Bill.belongsTo(User, {
    foreignKey: 'buyer_id',
    as: 'buyer'
});
User.hasMany(Bill, {
    foreignKey: 'buyer_id',
    as: 'bill_buyer'
});
Bill.belongsTo(User, {
    foreignKey: 'seller_id',
    as: 'seller'
});
User.hasMany(Bill, {
    foreignKey: 'seller_id',
    as: 'bill_seller'
});
Bill.belongsTo(Global_promotion, {
    foreignKey: 'promotion_id',
    as: 'global_promotion'
});
Global_promotion.hasMany(Bill, {
    foreignKey: 'promotion_id',
    as: 'bill'
});
//like
Like.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});
User.hasMany(Like, {
    foreignKey: 'user_id',
    as: 'like'
});
//rate
Rate.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});
User.hasMany(Rate, {
    foreignKey: 'user_id',
    as: 'rate'
});
//comment
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});
User.hasMany(Comment, {
    foreignKey: 'user_id',
    as: 'comment'
});
//user
User.hasOne(Wallet, {
    foreignKey: 'user_id',
    as: 'wallet'
});
Wallet.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});
//wallet_import
Wallet_import.belongsTo(Wallet, {
    foreignKey: 'wallet_id',
    as: 'wallet'
});
Wallet.hasMany(Wallet_import, {
    foreignKey: 'wallet_id',
    as: 'wallet_import'
});
Wallet_import.belongsTo(Employee, {
    foreignKey: 'employee_id',
    as: 'employee'
});
Employee.hasMany(Wallet_import, {
    foreignKey: 'employee_id',
    as: 'wallet_import'
});
//wallet_export
Wallet_export.belongsTo(Wallet, {
    foreignKey: 'wallet_id',
    as: 'wallet'
});
Wallet.hasMany(Wallet_export, {
    foreignKey: 'wallet_id',
    as: 'wallet_export'
});
Wallet_export.belongsTo(Employee, {
    foreignKey: 'employee_id',
    as: 'employee'
});
Employee.hasMany(Wallet_export, {
    foreignKey: 'employee_id',
    as: 'Wallet_export'
});
//paid_histry
Paid_history.belongsTo(Bill, {
    foreignKey: 'bill_id',
    as: 'bill'
});
Bill.hasMany(Paid_history, {
    foreignKey: 'bill_id',
    as: 'paid_history'
});
console.log('run associates')