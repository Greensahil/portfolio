var express = require('express');
var app     = express();
var bodyParser= require('body-parser');





app.get("/",function(req,res){
    res.render('index.ejs')
    
    
})


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The Server Has Started!");
});