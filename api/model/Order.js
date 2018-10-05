const mongoose= require('mongoose');

const order= {
    orderId:{
        type: String,
        required: true
    },
    orderAddress:{
        type: String,
        required: true
    },
    orderDate:{
        type: String,
        required: true
    },
    returnOrder:{
        type: String,
    }
};

module.exports= mongoose.model('Orders', order);