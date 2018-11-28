const express = require('express');
const bodyParser = require('body-parser');
const httpContext = require('express-http-context');
const consign = require('consign');
const dotenv = require('dotenv');
var uuid = require('uuid');

dotenv.config();

const server = express();

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({extended: true}));
server.use(httpContext.middleware);

server.httpContext = httpContext;
server.uuid = uuid;

consign()
.include('middleware')
.then('database')
.then('livro')
.then('error')
.into(server);

module.exports = server;