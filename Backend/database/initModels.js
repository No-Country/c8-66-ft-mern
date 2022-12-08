// Models
const { ubigeoRouter } = require('../routes/ubigeo.routes');
const { Ubigeo } = require('./ubigeo.model');
const { User } = require('./user.model');
const { Branch } = require('./branch.model');
const { Shipping } = require('./shipping.model');
const { Category } = require('./category.model');
const { ShippingStatusHistory } = require('./shippingStatusHistory.model');
const { ShippingStatus } = require('./shippingStatus.model');

const initModels = () => {
  //user <–—> has many <–—> shipping
  User.hasMany(Shipping);
  Shipping.belongsTo(User);

  //ubigeo <–—> has many <–—> shipping
  Ubigeo.hasMany(Shipping);
  Shipping.belongsTo(Ubigeo);

  //category <–—> has many <–—> shipping
  Category.hasMany(Shipping);
  Shipping.belongsTo(Category);

  //branch <–—> has many <–—> shipping
  Branch.hasMany(Shipping);
  Shipping.belongsTo(Branch);

  //branch <–—> has many <–—> ubigeo
  Ubigeo.hasMany(Branch);
  Branch.belongsTo(Ubigeo);
  
  //shipping_status_histroy <--> has one <--> shipping_status
  ShippingStatus.hasMany(ShippingStatusHistory);
  ShippingStatusHistory.belongsTo(ShippingStatus);

  //shipping_status_histroy <--> has one <--> shipping
  Shipping.hasMany(ShippingStatusHistory);
  ShippingStatusHistory.belongsTo(Shipping);
};

module.exports = { initModels };
