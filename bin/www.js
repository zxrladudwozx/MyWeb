//모듈
var express = require('express');

//서버 생성
var app = require('../app');
app.listen(9928, function(){
    console.log("server start");
})