module.exports = funciton(req, res, utility){
  console.log('Router team_candidate_pass.js ...');
  console.log('someone wants to pass '+ req.body.id + " in " + req.body.orderID + " order");
  console.log('so you must reject all others in this order ID');
  // utility.makeAjaxFail(res);
  // return;
  setTimeout(function(){
    res.send({"status": true,
              "teamId": req.body.id,
              "orderId": req.body.orderID
            });
  },3000)
}
