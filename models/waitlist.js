module.exports = function(sequelize, DataTypes) {
  var Waitlist = sequelize.define("Waitlist", {
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
  return Waitlist;
};
