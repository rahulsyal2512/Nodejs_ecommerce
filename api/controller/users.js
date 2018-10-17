const express = require('express');
const userRouter = express.Router();
const Users = require('../model/Users');
const mongoose = require('mongoose');
var bcrypt = require('bcrypt');
const saltRounds = 10;

userRouter.post((""), (req, res, next) => {
    mongoose.connect('mongodb://localhost:27017/Ecommerce', { useNewUrlParser: true });
    bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
        var user = new Users({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: hash,
            phoneNumber: req.body.phoneNumber,
            address: req.body.address
        })

        user.save().then(() => {
            res.status(200).json({
                msg: "Users successful",
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash,
                phoneNumber: req.body.phoneNumber,
                address: req.body.address
            });
        })
            .catch((err) => {
                res.status(404).json({
                    msg: "Users unsuccessful", err: err
                })
            })
    })
});


userRouter.post(('/login'), (req, res) => {
    mongoose.connect('mongodb://localhost:27017/Ecommerce', { useNewUrlParser: true });
    Users.findOne({ email: req.body.email })
        .then((user) => {
            bcrypt.compare(req.body.password, user.password)
                .then(function (response) {
                    if (response) {
                        res.status(200).json({
                            msg: 1
                        })
                    }
                    else {
                        res.status(200).json({
                            msg: -1
                        })
                    }
                })
        })
        .catch((err) => {
            res.status(422).json({
                msg: -2,
                error: err
            });
        });
})

module.exports = userRouter;   
