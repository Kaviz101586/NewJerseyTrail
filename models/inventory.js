module.exports = function (sequelize, DataTypes) {
  var Inventory = sequelize.define("Inventory", {
    userName: DataTypes.STRING,
    food: DataTypes.INTEGER,
    water: DataTypes.INTEGER,
    cash: DataTypes.INTEGER,
    gas: DataTypes.INTEGER,
    tire: DataTypes.BOOLEAN
    
  }, {
    timestamp: false,
  });
  
  // Inventory.associate = function(models){
  //   Inventory.belongsTo(models.User, {
  //     foreignKey:{
  //       allowNull: false,
  //     }
  //   });
  // };
  return Inventory;
};


  

