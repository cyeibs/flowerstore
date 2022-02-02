'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.User, { foreignKey: 'userId' });
      this.belongsTo(models.Flower, { foreignKey: 'flowerId' });
    }
  }
  Bin.init(
    {
      userId: DataTypes.INTEGER,
      flowerId: DataTypes.INTEGER,
      count: DataTypes.INTEGER,
      status: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Bin',
    }
  );
  return Bin;
};
