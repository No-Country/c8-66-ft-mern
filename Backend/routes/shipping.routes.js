const express = require('express');
const { body } = require('express-validator');

const {
  protectSession,
  protectUsersAccount,
  protectAdmin,
} = require('../middlewares/auth.middlewares');

const {
  branchExists,
  branchExistsParams,
} = require('../middlewares/branch.middlewares');

// controllers functions
const {
  getPrice,
  createShipping,
  updateShipping,
} = require('../controllers/shipping.controller');

//router declaration
const router = express.Router();

// get price
router.get(
  '/price/:ubigeo_origin/:ubigeo_destiny/:height/:width/:large/:weight',
  getPrice
);

// Protecting below endpoints
usersRouter.use(protectSession);

// create shipping
router.post('/', createShipping);

// get all category
router.get('/', getAllBranch);

// delete category by id
router.delete('/:id', branchExistsParams, deleteBranchById);

//  update shipping
router.patch('/', updateShipping);

module.exports = { shippingRouter: router };
