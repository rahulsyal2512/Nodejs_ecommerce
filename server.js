const http = require('http');
const express = require('express');
const app= express();
const imports = require('./imports');
const routes = require('./routes');

app.use(imports);

const port = process.env.PORT || 3000;
app.set(port);

app.use(routes);

const server = http.createServer(app);

server.listen(port);