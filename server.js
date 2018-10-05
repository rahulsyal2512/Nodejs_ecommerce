const http = require('http');
const express = require('express');
const app= express();
const routing = require('./imports')
const bodyParser = require('body-parser');

app.use((req, res, next) => {
    // console.log("first middleware");
    res.setHeader('Access-Control-Allow-Origin', '*'); //to-allow-it-to-run-from-every-IP
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-Width, Content-Type, Access');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,OPTIONS');
    
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

routing.routes()
const port = process.env.PORT || 3000;
app.set(port);

const server = http.createServer(app);

server.listen(port);