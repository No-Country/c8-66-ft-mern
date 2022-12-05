require('dotenv').config();

// Models
const { ShippingStatusHistory } = require('../database/shippingStatusHistory.model');
const { Shipping } = require('../database/shipping.model');

// Utils
const { catchAsync } = require('../utils/catchAsync.util');
const { AppError } = require('../utils/appError.util');

const showHistory = catchAsync(async (req,res,next) => {
    const shipping_id  = req.params.shipping_id;

    const shipping = await Shipping.findByPk(shipping_id,
        {
            include:{model: ShippingStatusHistory, as: 'shipping_status_histories'}
        }
    );

    // const shippingHistory = await ShippingStatusHistory.findAll(
    //     {
    //         where:{ shipping_id },
    //         order:[["createdAt","DESC"]]
    //     }
    // );

    if(shipping){
        return res.status(200).json({
            message:'success',
            shipping
        });
    } else {
        return res.status(404).json({
            message: 'Shipping History not found'
        });
    }
});

module.exports = {
    showHistory
}