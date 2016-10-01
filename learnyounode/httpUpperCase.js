var http = require('http');
var map = require('through2-map')

http.createServer(function(request, response){
    if (request.method == 'POST'){
	request.pipe(map(function (block){
	return block.toString().toUpperCase()
	})).pipe(response);
    }
}).listen(process.argv[2]);
