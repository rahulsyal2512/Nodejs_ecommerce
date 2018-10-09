const http = require('http');
const express = require('express');
const app= express();
// const routing = require('./imports');
const category = require('./api/controller/category');
const userRouter = require('./api/controller/users');
const orders = require('./api/controller/order');
const product = require('./api/controller/product');
const bodyParser = require('body-parser');

// app.use(routing);
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*'); //to-allow-it-to-run-from-every-IP
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Access');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,OPTIONS');
    
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3001;
app.set(port);

// app.use("/v1/category", category);
app.use(userRouter);
// app.use("/v1/order", orders)
// app.use("/v1/product", product);

const server = http.createServer(app);

server.listen(port);