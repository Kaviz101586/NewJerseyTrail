module.exports = function(sequelize, DataType){
    var User = sequelize.define('User', {
        name: DataType.STRING,
        
    });

    User.associate = function(models){
        User.hasMany(models.Inventory,{
            onDelete: 'cascade',
        });
    };


    return User;
};