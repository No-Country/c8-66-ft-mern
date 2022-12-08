
// Models
const { ShippingStatus }  = require('../database/shippingStatus.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');

const showAllShippingStatus = catchAsync(async (req,res,next) => {
    const status = await ShippingStatus.findAll();

    if(status){
        return res.status(200).json({
            message: 'success',
            status
        });
    } else {
        return res.status(404).json({
            message: 'status not found'
        });
    }
});

const showShippingById = catchAsync(async (req,res,next) => {
    const id = req.params.id;

    const status = await ShippingStatus.findByPk(id);

    if(status){
        return res.status(200).json({
            message: 'success',
            status
        });
    } else {
        return res.status(404).json({
            message: 'status not found'
        });
    }
});

module.exports = {
    showAllShippingStatus,
    showShippingById
}