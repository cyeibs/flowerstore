'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class JoinTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  JoinTable.init({
    flowerId: DataTypes.INTEGER,
    catId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'JoinTable',
  });
  return JoinTable;
};