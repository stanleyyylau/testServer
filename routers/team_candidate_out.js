module.exports = function(req, res, utility){
  // utility.makeAjaxFail(res);
  // return;
  console.log('Router team_candidate_out.js ...');
  console.log('someone want to reject ' + req.body.id + ' in ' + req.body.orderID + " order");
  setTimeout(function(){
    res.send({
      "status": true,
      "teamId": req.body.id,
      "orderId": req.body.orderID
    });
  },3000)
}
