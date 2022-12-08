const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const Shipping = db.define('shipping', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    unique: true,
  },
  user_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  ubigeo_id_origin: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  origin_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  origin_address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  origin_email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  origin_phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  destiny_name: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  destiny_address: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  destiny_email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  destiny_phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ubigeo_id_destiny: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  category_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  branch_id: {
    type: DataTypes.INTEGER,
  },
  shipping_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  origin_zip_code: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  destiny_zip_code: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  high_size: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  width_size: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  large_size: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  weight: {
    type: DataTypes.FLOAT,
    allowNull: true,
  },
  special_cares: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'active',
  },
  origin_comment: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  destiny_comment: {
    type: DataTypes.STRING,
    allowNull: true,
  }
});

module.exports = { Shipping };
