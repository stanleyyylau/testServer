var express = require('express');
var router = express.Router();
var utility = require('../utility.js');

router.get('/', function(req, res, utility){
  console.log('get request on /');
  res.send('Hello there');
})

module.exports = router;
