const http = require('http');
const express = require('express');
const app= express();
const routing = require('./imports');
const category = require('./api/controller/category');
const userRouter = require('./api/controller/users');
const orders = require('./api/controller/order');
const product = require('./api/controller/product');

app.use(routing);

const port = process.env.PORT || 3000;
app.set(port);

app.use("/v1/category", category);
app.use("/v1/users",userRouter);
app.use("/v1/order", orders)
app.use("/v1/product", product);

const server = http.createServer(app);

server.listen(port);