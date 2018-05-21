import { 
   
    User,
    Post
 
 } from "@/models/tables";
//post
Post.belongsTo(User, {
    foreignKey: 'id',
    as: 'user'
});
User.hasMany(Post, {
    foreignKey: 'user_id',
    as: 'post'
});

console.log('run associates')