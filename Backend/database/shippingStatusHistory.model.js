const { db, DataTypes } = require("../utils/database.util");

const ShippingStatusHistory = db.define("shipping_status_history", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  shipping_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  status_id: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  shipping_status_date: {
    type: DataTypes.DATE,
    allowNull: false
  }
});

module.exports = { ShippingStatusHistory };
