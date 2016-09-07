var express = require('express');
var bodyParser = require('body-parser')

var app = express();

//get Testing data
var moreOrders = require("./testData/moreOrders.json");

app.use(express.static('public'));
//bodyParser is used to read the JSON object the client sent

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', function (req, res) {
  console.log('get request on /');
  res.send(moreOrders.key);
});

app.post('/taozhongbao/detail_form', function(req, res){
  console.log('someone sent you an JSON object');
  console.log(req.body);
  setTimeout(function(){
    res.send({"value":"value"});
  },3000);
});

app.post('/test/api/more_orders', function(req, res){
  console.log("someone ask for " + req.body.page + "th screen more orders");
  //to make your ajax fail, uncomment the line below
  makeAjaxFail(res);
  return;
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

});

app.post('/test/api/team_candidate_pass', function(req, res){
  console.log('someone wants to pass '+ req.body.id + " in " + req.body.orderID + " order");
  console.log('so you must reject all others in this order ID');
  // makeAjaxFail(res);
  // return;
  setTimeout(function(){
    res.send({"status": true,
              "teamId": req.body.id,
              "orderId": req.body.orderID
            });
  },3000)
});

app.post('/test/api/cancel_order', function(req, res){
  console.log('someone wants to cancel ' + req.body.orderid + ' order');
  // makeAjaxFail(res);
  // return;
  setTimeout(function(){
    res.send({
      "status": true,
      "orderId": req.body.orderid
    })
  })
});

app.post('/test/api/team_candidate_out', function(req, res){
  console.log('someone want to reject ' + req.body.id + ' in ' + req.body.orderID + " order");
  setTimeout(function(){
    res.send({
      "status": true,
      "teamId": req.body.id,
      "orderId": req.body.orderID
    });
  },3000)
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});




//useful functions to make my life easier
function makeAjaxFail(res){
  res.send(401);
  return;
}
