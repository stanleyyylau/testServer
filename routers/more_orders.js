var express = require('express');
var router = express.Router();
var utility = require('../utility.js');

//get Testing data
var moreOrders = require("../testData/moreOrders.json");


router.post('/', function(req, res, next){
  console.log('Router more_orders.js ...');
  console.log("someone ask for " + req.body.page + "th screen more orders");
  //to make your ajax fail, uncomment the line below
  // utility.makeAjaxFail(res);
  // return;
  var whichPage = req.body.page;
  var responseJson = {
    "status": "false",
    "result": []
  };
  responseJson.status = true;
  if(whichPage >= 3){
    responseJson.messsage = "没有记录了";
    res.send(responseJson);
  }else{
    responseJson.result[0] = moreOrders.allOrders[whichPage];

    setTimeout(function(){
      res.send(responseJson);
    },2000)
  }
})

module.exports = router;
