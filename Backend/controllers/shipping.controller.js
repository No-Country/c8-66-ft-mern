const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

//const Sequelize = require('sequelize');

const { AppError } = require('../utils/appError');

//const { Branch } = require('../database/branch.model');
const { Ubigeo } = require('../database/ubigeo.model');
const { Shipping } = require('../database/shipping.model');

// utils
const { catchAsync } = require('../utils/catchAsync');
const sequelize = require('sequelize');
const { Distancia } = require('../utils/distancia');

const getPrice = catchAsync(async (req, res, next) => {
  const { ubigeo_id_origin, ubigeo_id_destiny } = req.body;

  const data1 = await Ubigeo.findOne({
    where: { id: ubigeo_id_origin },
  });

  const data2 = await Ubigeo.findOne({
    where: { id: ubigeo_id_destiny },
  });

  const Price = (
    Distancia(
      data1.latitude,
      data2.latitude,
      data1.longuitude,
      data2.longuitude
    ) *
    0.05 *
    0.25
  ).toFixed(2);

  res.status(201).json({
    status: 'Success',
    message: 'Price USD has been calculated USD',
    Price,
  });
});

const createShipping = catchAsync(async (req, res, next) => {
  const { user_id, ubigeo_id_origin, destiny_name, destiny_address,destiny_email, destiny_phone, ubigeo_id_destiny, category_id, branch_id,
          origin_name, origin_address,origin_email, origin_phone,
          shipping_date, price, high_size, width_size, large_size, weight, special_cares, origin_comment, destiny_comment } = req.body;
  
  const shipping = await Shipping.create({
    user_id, 
    ubigeo_id_origin, 
    destiny_name, 
    destiny_address, 
    destiny_email,
    destiny_phone,
    origin_name,
    origin_address,
    origin_email,
    origin_phone,
    ubigeo_id_destiny, 
    category_id, 
    branch_id,
    shipping_date, 
    price, 
    high_size, 
    width_size,
    large_size,
    weight,
    special_cares,
    origin_comment,
    destiny_comment
  });

  if(shipping){
    res.status(201).json({
      status: 'success',
      data: shipping
    });
  }else{
    res.status(400).json({
      status: 'shipping creation error',
    });
  }
});

const updateShipping = catchAsync(async (req,res,next)=>{
  const { id, user_id, ubigeo_id_origin, destiny_name, destiny_address,destiny_email, destiny_phone, ubigeo_id_destiny, category_id, branch_id,
    price, high_size, width_size, large_size, weight,zip_code, special_cares } = req.body;

  const shipping = Shipping.findByPk(id);

  if(shipping){
    await shipping.update({
      user_id,
      ubigeo_id_origin,
      destiny_name,
      destiny_address,
      ubigeo_id_destiny,
      destiny_email,
      destiny_phone,
      category_id,
      branch_id,
      shipping_date: Date.now(), 
      price,
      high_size,
      width_size,
      large_size,
      weight,
      zip_code,
      special_cares
    });

    res.status(200).json({ status:'success' });
  } else {
    res.status(404).json({ status:'shipping not found' });
  }
});

module.exports = {
  getPrice,
  createShipping,
  updateShipping
};
