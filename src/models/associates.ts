import {

    User,
    Post,
    Product,
    GlobalArea,
    BillItem,
    BillActivity,
    GlobalPromotion,
    Bill,
    Like,
    Comment,
    Rate,
    Wallet,
    WalletImport,
    WalletExport,
    PaidHistory,
    Employee,
    GlobalAttribute,
    GlobalCategory,
    GlobalCategoryAndAttribute,
    UserSetting,
    FavoriteProduct,
    FavoritePost,
    HistoryMembership,
    ProductGlobalAttribute,
    Notification,
    Store,
    Report,
    ProductPost,
    VnpayHistory,
    RelationshipHistory,
    Following,
    Relationship,
    ExportRequest

} from "@/models/tables";

//ExportRequest
ExportRequest.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});
User.hasMany(ExportRequest, {
    foreignKey: 'user_id',
    as: 'user_export_requests'
});

ExportRequest.belongsTo(Employee, {
    foreignKey: 'employee_id',
    as: 'employee'
});
Employee.hasMany(ExportRequest, {
    foreignKey: 'employee_id',
    as: 'employee_export_requests'
});
//report
Report.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});
User.hasMany(Report, {
    foreignKey: 'user_id',
    as: 'reports'
});
//Notification
Notification.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});
User.hasMany(Notification, {
    foreignKey: 'user_id',
    as: 'notifications'
});
//post
Post.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});
User.hasMany(Post, {
    foreignKey: 'user_id',
    as: 'posts'
});
//product
Product.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});
User.hasMany(Product, {
    foreignKey: 'user_id',
    as: 'products'
});
Product.belongsTo(GlobalArea, {
    foreignKey: 'global_area_id',
    as: 'global_area'
});
GlobalArea.hasMany(Product, {
    foreignKey: 'global_area_id',
    as: 'products'
});
Product.belongsTo(GlobalCategory, {
    foreignKey: 'global_category_id',
    as: 'global_category'
});
GlobalCategory.hasMany(Product, {
    foreignKey: 'global_category_id',
    as: 'products'
});
//Category & Attribute
GlobalCategoryAndAttribute.belongsTo(GlobalCategory, {
    foreignKey: 'global_category_id',
    as: 'category'
});
GlobalCategory.hasMany(GlobalCategoryAndAttribute, {
    foreignKey: 'global_category_id',
    as: 'attributes'
});

GlobalCategoryAndAttribute.belongsTo(GlobalAttribute, {
    foreignKey: 'global_attribute_id',
    as: 'attribute'
});
GlobalAttribute.hasMany(GlobalCategoryAndAttribute, {
    foreignKey: 'global_category_id',
    as: 'categories'
});
//FavoriteProduct
FavoriteProduct.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});
User.hasMany(FavoriteProduct, {
    foreignKey: 'user_id',
    as: 'favorite_products'
});

FavoriteProduct.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product'
});
Product.hasMany(FavoriteProduct, {
    foreignKey: 'product_id',
    as: 'favorites'
});
//FavoritePost
FavoritePost.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});
User.hasMany(FavoritePost, {
    foreignKey: 'user_id',
    as: 'favorite_posts'
});

FavoritePost.belongsTo(Post, {
    foreignKey: 'post_id',
    as: 'post'
});
Post.hasMany(FavoritePost, {
    foreignKey: 'post_id',
    as: 'favorites'
});
//Product_Post
ProductPost.belongsTo(Post, {
    foreignKey: 'post_id',
    as: 'post'
});
Post.hasMany(ProductPost, {
    foreignKey: 'post_id',
    as: 'products'
});

ProductPost.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product'
});
Product.hasMany(ProductPost, {
    foreignKey: 'product_id',
    as: 'posts'
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
Bill.belongsTo(GlobalPromotion, {
    foreignKey: 'promotion_id',
    as: 'global_promotion'
});
GlobalPromotion.hasMany(Bill, {
    foreignKey: 'promotion_id',
    as: 'bills'
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
    as: 'likes'
});
Like.belongsTo(Post, {
    foreignKey: 'entity_id',
    as: 'post'
})
Post.hasMany(Like, {
    foreignKey: 'entity_id',
    as: 'likes'
})
Like.belongsTo(Comment, {
    foreignKey: 'entity_id',
    as: 'comment'
})
Comment.hasMany(Like, {
    foreignKey: 'entity_id',
    as: 'likes'
})

//rate
Rate.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});
User.hasMany(Rate, {
    foreignKey: 'user_id',
    as: 'rates'
});
//comment
Comment.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});
User.hasMany(Comment, {
    foreignKey: 'user_id',
    as: 'comments'
});
Comment.belongsTo(Post, {
    foreignKey: 'entity_id',
    as: 'post'
})
Post.hasMany(Comment, {
    foreignKey: 'entity_id',
    as: 'comments'
})
//user
User.hasOne(Wallet, {
    foreignKey: 'user_id',
    as: 'wallet'
});
Wallet.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});
User.hasOne(UserSetting, {
    foreignKey: 'user_id',
    as: 'user_setting'
});
UserSetting.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});
User.hasOne(Store, {
    foreignKey: 'user_id',
    as: 'store'
});
Store.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
});
//wallet_import
WalletImport.belongsTo(Wallet, {
    foreignKey: 'wallet_id',
    as: 'wallet'
});
Wallet.hasMany(WalletImport, {
    foreignKey: 'wallet_id',
    as: 'imports'
});
WalletImport.belongsTo(Employee, {
    foreignKey: 'employee_id',
    as: 'employee'
});
Employee.hasMany(WalletImport, {
    foreignKey: 'employee_id',
    as: 'wallet_imports'
});
//wallet_export
WalletExport.belongsTo(Wallet, {
    foreignKey: 'wallet_id',
    as: 'wallet'
});
Wallet.hasMany(WalletExport, {
    foreignKey: 'wallet_id',
    as: 'exports'
});
WalletExport.belongsTo(Employee, {
    foreignKey: 'employee_id',
    as: 'employee'
});
Employee.hasMany(WalletExport, {
    foreignKey: 'employee_id',
    as: 'Wallet_exports'
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

// History Membership
HistoryMembership.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
})
User.hasMany(HistoryMembership, {
    foreignKey: 'user_id',
    as: 'history_memberships'
});

// ProductGlobalAttribute
ProductGlobalAttribute.belongsTo(Product, {
    foreignKey: 'product_id',
    as: 'product'
})
Product.hasMany(ProductGlobalAttribute, {
    foreignKey: 'product_id',
    as: 'global_attributes'
});
ProductGlobalAttribute.belongsTo(GlobalAttribute, {
    foreignKey: 'global_attribute_id',
    as: 'global_attribute'
})
GlobalAttribute.hasMany(ProductGlobalAttribute, {
    foreignKey: 'global_attribute_id',
    as: 'products'
})

// Vnpay History
PaidHistory.belongsTo(VnpayHistory, {
    foreignKey: 'vnpay_history_id',
    as: 'vnpay_history'
})
VnpayHistory.hasOne(PaidHistory, {
    foreignKey: 'vnpay_history_id',
    as: 'paid_history'
});

// Relationship History
RelationshipHistory.belongsTo(User, {
    foreignKey: 'sender_id',
    as: 'sender'
})
User.hasMany(RelationshipHistory, {
    foreignKey: 'sender_id',
    as: 'relationship_sends'
})
RelationshipHistory.belongsTo(User, {
    foreignKey: 'receiver_id',
    as: 'receiver'
})
User.hasMany(RelationshipHistory, {
    foreignKey: 'receiver_id',
    as: 'relationship_receives'
})

// Following
Following.belongsTo(User, {
    foreignKey: 'user_id',
    as: 'user'
})
User.hasMany(Following, {
    foreignKey: 'user_id',
    as: 'followings'
})
Following.belongsTo(User, {
    foreignKey: 'follower_id',
    as: 'follower'
})
User.hasMany(Following, {
    foreignKey: 'follower_id',
    as: 'followers'
})

// Relationship
Relationship.belongsTo(User, {
    foreignKey: 'sender_id',
    as: 'sender'
})
Relationship.belongsTo(User, {
    foreignKey: 'receiver_id',
    as: 'receiver'
})
Relationship.belongsTo(RelationshipHistory, {
    foreignKey: 'relationship_history_id',
    as: 'history'
})
RelationshipHistory.hasOne(Relationship, {
    foreignKey: 'relationship_history_id',
    as: 'relationship'
})


console.log('run associates')