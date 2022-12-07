const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const ShippingStatusHistory = db.define('shipping_status_history', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  shipping_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  status_id: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  shipping_status_date: {
    type: DataTypes.DATE,
    allowNull: true,
  },
});

module.exports = { ShippingStatusHistory };
