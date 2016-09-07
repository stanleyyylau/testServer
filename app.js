var express = require('express');
var bodyParser = require('body-parser');
var utility = require('./utility.js');

var app = express();

//get Testing data
var moreOrders = require("./testData/moreOrders.json");

app.use(express.static('public'));
//bodyParser is used to read the JSON object the client sent

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

//handling CORS issues
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


//* ALL the routers and handlers goes here *//
//* Dependencies injection is needed if handler function needs *//
//* 1, utility module *//
//* 2, moreOrders data *//


app.get('/', function(req, res){
  var handler = require('./routers/root.js');
  handler(req, res, moreOrders, utility);
});

app.post('/taozhongbao/detail_form', function(req, res){
  var handler = require('./routers/detail_form.js')
  handler(req, res, utility);
});

app.post('/test/api/more_orders', function(req, res){
  var handler = require('./routers/more_orders.js')
  handler(req, res, moreOrders, utility);
});

app.post('/test/api/team_candidate_pass', function(req, res){
  var handler = require('./routers/team_candidate_pass.js');
  handler(req, res, utility);
});

app.post('/test/api/cancel_order', function(req, res){
  var handler = require('./routers/cancel_order.js');
  handler(req, res, utility);
});

app.post('/test/api/team_candidate_out', function(req, res){
  var handler = require('./routers/team_candidate_out.js');
  handler(req, res, utility);
});

app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
