var express = require('express');

var app = express();

app.use(function(req, res){
    //res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end('<title>sadf</title><h1>Hello</h1><br><h2>world!</h2>');
})

app.listen(9928, function(){
    console.log("server start");
})