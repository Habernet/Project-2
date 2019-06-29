module.exports = function(sequelize, DataTypes) {
  var Order = sequelize.define("Order", {
    orderid: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phonenumber: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Order;
};
