var express = require('express');
var router = express.Router();
var utility = require('../utility.js');

router.post('/', function(req, res, utility){
  console.log('Router detail_form.js ...');
  console.log('someone sent you an JSON object');
  console.log(req.body);
  setTimeout(function(){
    res.send({"value":"value"});
  },3000);
});

module.exports = router;
