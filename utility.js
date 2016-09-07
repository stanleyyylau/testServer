//useful functions to make my life easier
function makeAjaxFail(res){
  res.send(401);
  return;
}

module.exports = {
  makeAjaxFail: makeAjaxFail
}
