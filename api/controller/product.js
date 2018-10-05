const express = require('express');
const productRouter = express.Router();
const Product= require('../model/Product');
const mongoose= require('mongoose');

productRouter.post((''),(req,res)=>{
    mongoose.connect('mongodb://localhost:27017/Ecommerce', { useNewUrlParser: true });
    console.log(req.body);
    var products= new Product({
        productId: req.body.productId,
        productName: req.body.productName,
        weight: req.body.weight,
        quantity: req.body.quantity,
        flavour: req.body.flavour,
        costPrice: req.body.costPrice,
        availability: req.body.availability,
        sku: req.body.sku,
        description: req.body.description,
        specification: req.body.specification,
        review: req.body.review,
        additionalInformation: req.body.additionalInformation,
        saleCount: req.body.saleCount
    })
    console.log(req.body);   
    products.save().then(()=>
    {
        console.log("hey");
        res.status(200).json({
            msg: "Product successful",
            productId: req.body.productId,
            productName: req.body.productName,
            weight: req.body.weight,
            quantity: req.body.quantity,
            flavour: req.body.flavour,
            costPrice: req.body.costPrice,
            availability: req.body.availability,
            sku: req.body.sku,
            description: req.body.description,
            specification: req.body.specification,
            review: req.body.review,
            additionalInformation: req.body.additionalInformation,
            saleCount: req.body.saleCount
        });
    })
    .catch((err)=>{
        res.status(422).json({
            msg:"Product unsuccessful",
            error: err,
            body: req.body
        })
    })
});

module.exports = productRouter;     