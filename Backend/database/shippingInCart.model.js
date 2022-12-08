const { DataTypes } = require('sequelize');
const { db } = require('../utils/database');

const ShippingInCart = db.define("shippingInCarts", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  distance: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  base_price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: "active",
  },
});

module.exports = { ShippingInCart };
