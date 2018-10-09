const express = require('express');
const userRouter = express.Router();
const Users = require('../model/Users');
const mongoose = require('mongoose');

userRouter.post((""), (req, res) => {   
    mongoose.connect('mongodb://localhost:27017/Ecommerce', { useNewUrlParser: true });
    var user = new Users({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address
    })
    user.save().then(() => {
        console.log(res)
        res.status(200).json({
            msg: "Users successful",
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address
        });
    })
        .catch((err) => {
            res.status(404).json({
                msg: "Users unsuccessful", err: err
            })
        })
});

module.exports = userRouter;   
