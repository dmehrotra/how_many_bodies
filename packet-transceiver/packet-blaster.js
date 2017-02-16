var request = require('request');
var url = "http://localhost:8080/"+Date.now();
console.log(url)
request(url, function (error, response, body) {
     
    if (!error && response.statusCode == 200) {
        console.log(response.body)
     }else{
        console.log(error)
     }
})
