var express = require('express');
var app = express();
var port = process.env.PORT || 8080;
app.get('/:timestamp',function(req,res){
    console.log(req.params.timestamp);
    eval(require('locus'))
    res.send(JSON.stringify({ a: 1 }));

})
app.listen(port,function(){
    console.log('listening on' + port);
})
