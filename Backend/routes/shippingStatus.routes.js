// Router
const express = require('express');
const shippingStatusRouter = express.Router();

// Controllers
const { showAllShippingStatus, showShippingById } = require('../controllers/shippingStatus.controller') 

// Show all status
shippingStatusRouter.get('/',showAllShippingStatus);

// Show status by id
shippingStatusRouter.get('/:id',showAllShippingStatus);

module.exports = shippingStatusRouter;