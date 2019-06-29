module.exports = function(sequelize, DataTypes) {
  var Table = sequelize.define("Table", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    phonenumber: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numberinparty: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return Table;
};
