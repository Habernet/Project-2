module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    itemreviewed: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });
  return Review;
};
