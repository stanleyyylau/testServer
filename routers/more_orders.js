module.exports = function(req, res, moreOrders, utility){
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
  if(whichPage >= moreOrders.allOrders.length){
    responseJson.messsage = "暂时无更多数据显示";
    res.send(responseJson);
  }else{
    responseJson.result[0] = moreOrders.allOrders[whichPage];

    setTimeout(function(){
      res.send(responseJson);
    },2000)
  }
}
