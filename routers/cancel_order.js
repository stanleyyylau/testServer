module.exports = function(req, res, utility){
  console.log('Router cancel_order.js ...');
  console.log('someone wants to cancel ' + req.body.orderid + ' order');
  // utility.makeAjaxFail(res);
  // return;
  setTimeout(function(){
    res.send({
      "status": true,
      "orderId": req.body.orderid
    })
  })
}
