const utils = require("./utils");

module.exports = function(app){
  app.get('/',function(req,res){
    return utils.sendJSON(res,"Bonjour, you landed on the right page, it's working")
  })

  app.post('/login',function(req,res){
    // console.log("req...",req);
    return utils.sendJSON(res,{data:"Login Success",username: req.body.username})
  })
}
