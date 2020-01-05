var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  var hello = "cts";
  res.render('index', {'asdf':hello});
});

router.get('/first', function(req, res){
  res.send("This is first!");
});

 module.exports = router;