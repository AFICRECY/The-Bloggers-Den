const User = require('./User');
const Project = require('./Post');

User.hasMany(Posts, {
foreignKey: 'user_id',
onDelete: 'CASCADE'
});


User.hasMany(Comments, {
    foreignKey: 'user_id',
    onDelete: 'CASCADE'
});

Posts.belongsTo(User, {
foreignKey: 'user_id'
});

Comments.belongsTo(User, {
    foreignKey: 'user_id'
});

module.exports = { User, Posts, Comments };
