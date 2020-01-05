var express = require('express');
var path = require('path');
// var bodyParser = require('body-parser');
var app = express();

var indexRouter = require('./routers/index');
app.use('/', indexRouter);

app.set('views', path.join(__dirname, 'views'));    //router에서 사용할 타입과 위치
app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'views'))); //view로 설정해줘서 이미지 불러올수 있게함
module.exports = app;