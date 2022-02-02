'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Flower extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Bin, { foreignKey: 'flowerId' });
      this.belongsToMany(models.Cat, {
        through: 'JoinTables',
        foreignKey: 'flowerId',
      });
    }
  }
  Flower.init(
    {
      fName: DataTypes.STRING,
      descr: DataTypes.STRING,
      pic: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      popular: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'Flower',
    }
  );
  return Flower;
};
