'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jadwal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      
    }
  }
  Jadwal.init({
    JokiId: DataTypes.INTEGER,
    AkunId: DataTypes.INTEGER,
    JamId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Jadwal',
  });
  return Jadwal;
};