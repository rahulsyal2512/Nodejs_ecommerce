const express = require('express');
const app = express();
const category = require('./api/controller/category');
const user = require('./api/controller/users');
const orders = require('./api/controller/order');
const product = require('./api/controller/product');
const bodyParser = require('body-parser');

module.exports ={ 

routes: function () {
    return (
        app.use("/v1/category", category)
        // app.use("/v1/users", user)
        // app.use("/v1/order", orders)
        // app.use("/v1/product", product);
    );
},

imports: function() {
    app.use((req, res, next) => {
        // console.log("first middleware");
        res.setHeader('Access-Control-Allow-Origin', '*'); //to-allow-it-to-run-from-every-IP
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Access');
        res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,OPTIONS');
        
    })
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: false }));
}
}