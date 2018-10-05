const express = require('express');
const orderRouter = express.Router();
const Order= require('../model/Order');
const mongoose= require('mongoose');

orderRouter.post((''),(req,res)=>{
    mongoose.connect('mongodb://localhost:27017/Ecommerce', { useNewUrlParser: true });
    var order= new Order({
        orderId: req.body.orderId,
        orderAddress: req.body.orderAddress,
        orderDate: req.body.orderDate,
        returnOrder: req.body.returnOrder
    })
    order.save()
    .then(()=>
    {
        res.status(200).json({
            msg: "Order successful",
            orderId: req.body.orderId,
            orderAddress: req.body.orderAddress,
            orderDate: req.body.orderDate,
            returnOrder: req.body.returnOrder
        });
    })
    .catch((err)=>{
        res.status(404).json({
            msg:"Order unsuccessful"
        })
    })
});

module.exports = orderRouter;     