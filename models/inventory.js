module.exports = function(sequelize, DataTypes) {
    var Inventory = sequelize.define("Inventory", {
      food: DataTypes.INTEGER,
      water: DataTypes.INTEGER,
      cash: DataTypes.INTEGER,
      gas: DataTypes.INTEGER,
    });
    return Inventory;
  };
  