var http = require('http');

http.get(process.argv[2], function (response){
    var final = '';
    response.setEncoding('utf8');
    response.on('data', function (data){
	final += data;
    });
    response.on('end', function (){
	console.log(final.length);
	console.log(final);
    });
});
