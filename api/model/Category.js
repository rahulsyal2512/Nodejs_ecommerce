const mongoose= require('mongoose');

const category= {
    categoryName:{
        type: String,
        required: true
    },
    categoryId:{
        type: String,
        required: true
    },
};

module.exports= mongoose.model('Category', category);