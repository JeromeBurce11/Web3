var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var http = require('http').Server(app);
var User = require('../../public/models/mongoDB')
const path = require('path');
var port = process.env.PORT || 3000;

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

