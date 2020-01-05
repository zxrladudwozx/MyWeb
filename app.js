var express = require('express');
var path = require('path');
// var bodyParser = require('body-parser');
var app = express();

var indexRouter = require('./routers/index');
app.use('/', indexRouter);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({extended: true}));
// app.use(express.static(path.join(__dirname, 'views')));
module.exports = app;