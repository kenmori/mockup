/**
 * Created by No51 on 2016/08/07.
 */

// var http = require('http');
// http.createServer(function(req, res){
// 	res.writeHead(200, {'Content-Type': 'text/plain'});
// 	res.end('Hello World\n');
// }).listen(1337, '127.0.0.1');
// console.log('server running at http://127.0.0.1:1337/');


var ws = require('websocket.io');
var server = ws.listen(1337, function(){
	console.log('server running at http://127.0.0.1:1337/');
});

server.on('connection', function(client){
	client.on('message', function(message){
		var obj = JSON.parse(message);
		server.clients.forEach(function(client){
			client.send(obj.author + ">" + obj.text);
		});
	});
})
