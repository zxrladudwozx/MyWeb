var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  var hello = "cts";
  res.render('index', {'asdf':hello});
});

router.get('/information', function(req, res){
  res.render('information');
});

 module.exports = router;
 