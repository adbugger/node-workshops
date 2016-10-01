var http = require('http');
var through2 = require('through2');

var upper = through2(function (buf, enc, next){
    this.push(buf.toString().toUpperCase());
    next();
});

var server = http.createServer(function(req, res){
    if(req.method === 'POST'){
	req.pipe(upper).pipe(res);
    }
    else res.end();
});

server.listen(parseInt(process.argv[2]));
