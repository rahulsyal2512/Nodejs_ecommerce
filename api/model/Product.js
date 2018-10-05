const mongoose= require('mongoose');

const products= {
    productId:{
        type: String,
        required: true
    },
    productName:{
        type: String,
        required: true
    },
    weight:{
        type: String,
        required: true
    },
    quantity:{
        type: String,
        required: true
    },
    flavour:{
        type: String,
        required: true
    },
    costPrice:{
        type: String,
        required: true
    },
    availability:{
        type: String,
        required: true
    },
    sku:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    specification:{
        type: String,
        required: true
    },
    review:{
        type: String,
        required: true
    },
    additionalInformation:{
        type: String,
        required: true
    },
    saleCount:{
        type: String,
        required: true
    }
};

module.exports = mongoose.model('Product', products);