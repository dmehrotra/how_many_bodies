var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
app.get('/:timestamp',function(req,res){
    difference = Date.now() - parseInt(req.params.timestamp)
    
    res.send(JSON.stringify({ 'difference': difference }));

})
app.listen(port,function(){
    console.log('listening on' + port);
})
