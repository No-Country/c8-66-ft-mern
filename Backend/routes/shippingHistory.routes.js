const express = require('express');

// Controllers
const {
	showHistory
} = require('../controllers/shippingHistory.controller');

const shippingHistoryRouter = express.Router();

shippingHistoryRouter.get('/:shipping_id',showHistory);

module.exports = { shippingHistoryRouter };