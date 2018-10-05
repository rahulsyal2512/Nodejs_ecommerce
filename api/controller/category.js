const express = require('express');
const categoryRouter = express.Router();
const Category= require('../model/Category');
const mongoose= require('mongoose');

categoryRouter.post((''),(req,res)=>{
    mongoose.connect('mongodb://localhost:27017/Ecommerce', { useNewUrlParser: true });
    var category= new Category({
        categoryId: req.body.categoryId,    
        categoryName: req.body.categoryName
    })
    category.save()
    .then(()=>
    {   
        res.status(200).json({
            msg: "Category successful",
            categoryId: req.body.categoryId,
            categoryName: req.body.categoryName
        });
    })
    .catch((err)=>{
        res.status(404).json({
            msg:"Category unsuccessful",
            err: err
        })
    })
});

module.exports = categoryRouter;     