'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ubigeo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Ubigeo.hasMany(models.User);
    }
  }
  Ubigeo.init({
    ubigeo_id: DataTypes.INTEGER,
    country: DataTypes.STRING,
    province: DataTypes.STRING,
    region: DataTypes.STRING,
    district: DataTypes.STRING,
    latitude: DataTypes.INTEGER,
    longitude: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ubigeo',
  });
  return Ubigeo;
};