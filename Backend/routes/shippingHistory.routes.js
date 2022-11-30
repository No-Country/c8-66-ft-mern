const express = require('express');
const shippingHistoryRouter = express.Router();

// Controllers
const {
	showHistory
} = require('../controllers/shippingHistory.controller');

shippingHistoryRouter.get('/:shipping_id',showHistory);

module.exports = { shippingHistoryRouter };