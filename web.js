var express = require('express');
var fs=require('fs');
var htmlfile="index.html";
var app = express.createServer(express.logger());

app.get('/', function(request, response) {
 // var buf = new Buffer(250);
  var html= fs.readFileSync(htmlfile).toString();
  buf=fs.readFileSync('index.html');
 //  var str=buf.toString();
  response.send(str);
});
var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
