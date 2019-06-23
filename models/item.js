module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define("Item", {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    price: DataTypes.FLOAT
  });
  return Item;
};
