var express = require('express');
var bodyParser = require('body-parser');
var utility = require('./utility.js');

/* routers here */
var cancel_order = require('./routers/cancel_order');
var detail_form = require('./routers/detail_form');
var more_orders = require('./routers/more_orders');
var rootRouter = require('./routers/root');
var team_candidate_out = require('./routers/team_candidate_out');
var team_candidate_pass = require('./routers/team_candidate_pass');

var app = express();



app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }))
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


app.use('/', rootRouter);

app.use('/taozhongbao/detail_form', detail_form);

app.use('/test/api/more_orders', more_orders);

app.use('/test/api/team_candidate_pass', team_candidate_pass);

app.use('/test/api/cancel_order', cancel_order);

app.use('/test/api/team_candidate_out', team_candidate_out);


app.use('/edit_test', edit_test);


app.listen(4000, function () {
  console.log('Example app listening on port 4000!');
});
