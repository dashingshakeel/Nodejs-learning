var http = require('http');
var fs= require('fs');

var server = http.createServer(function(request, response){
  response.write('<h1>heeeelllloooo</h1>');
  response.write('<p>method'+ request.method +'</p>')
  response.write('<p>url'+ request.url +'</p>')
  response.end();
});

//server.listen(3000);
 // another way to create server

 var server2=http.createServer();

 server2.on('request',function(req,res){
  fs.createReadStream('server.js').pipe(res);
 })


 server2.listen(3000);