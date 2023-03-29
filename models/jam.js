'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Jam extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Jam.belongsToMany(models.Joki, { through: models.Jadwal});
      Jam.belongsToMany(models.Akun, { through: models.Jadwal});
    }
  }
  Jam.init({
    sesi: DataTypes.INTEGER,
    jam: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Jam',
  });
  return Jam;
};