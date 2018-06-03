import { 
   
    User,
    Post,
    Product,
    Global_area,
    BillItem,
    BillActivity,
    Global_promotion,
    Bill,
    Like,
    Comment,
    Rate,
    Wallet,
    Wallet_import,
    Wallet_export,
    PaidHistory,
    Employee,
    GlobalAttribute,
    GlobalCategory,
    GlobalCategoryAndAttribute
 
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
Product.belongsTo(GlobalCategory, {
    foreignKey: 'global_category_id',
    as: 'global_category'
});
GlobalCategory.hasMany(Product, {
    foreignKey: 'global_category_id',
    as: 'product'
});
//Category & Attribute
GlobalCategoryAndAttribute.belongsTo(GlobalCategory, {
    foreignKey: 'global_category_id',
    as: 'global_category'
});
GlobalCategory.hasMany(GlobalCategoryAndAttribute, {
    foreignKey: 'global_category_id',
    as: 'global_category_and_attribute'
});

GlobalCategoryAndAttribute.belongsTo(GlobalAttribute, {
    foreignKey: 'global_attribute_id',
    as: 'global_attribute'
});
GlobalAttribute.hasMany(GlobalCategoryAndAttribute, {
    foreignKey: 'global_category_id',
    as: 'global_category_and_attribute'
});
//BillItem
BillItem.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product'
});
Product.hasMany(BillItem, {
    foreignKey: 'product_id',
    as: 'bill_items'
});
BillItem.belongsTo(Bill, {
    foreignKey: 'bill_id',
    as: 'bill'
});
Bill.hasMany(BillItem, {
    foreignKey: 'bill_id',
    as: 'items'
});

//BillActivity
BillActivity.belongsTo(Bill, {
    foreignKey: 'bill_id',
    as: 'bill'
});
Bill.hasMany(BillActivity, {
    foreignKey: 'bill_id',
    as: 'activities'
});

//bill
Bill.belongsTo(User, {
    foreignKey: 'buyer_id',
    as: 'buyer'
});
User.hasMany(Bill, {
    foreignKey: 'buyer_id',
    as: 'bill_buyers'
});
Bill.belongsTo(User, {
    foreignKey: 'seller_id',
    as: 'seller'
});
User.hasMany(Bill, {
    foreignKey: 'seller_id',
    as: 'bill_sellers'
});
Bill.belongsTo(Global_promotion, {
    foreignKey: 'promotion_id',
    as: 'global_promotion'
});
Global_promotion.hasMany(Bill, {
    foreignKey: 'promotion_id',
    as: 'bill'
});
Bill.belongsTo(BillActivity, {
    foreignKey: 'current_bill_activity_id',
    as: 'activity'
})
Bill.belongsTo(PaidHistory, {
    foreignKey: 'current_paid_history_id',
    as: 'paid_history'
})

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
PaidHistory.belongsTo(Bill, {
    foreignKey: 'bill_id',
    as: 'bill'
});
Bill.hasMany(PaidHistory, {
    foreignKey: 'bill_id',
    as: 'paid_histories'
});

console.log('run associates')