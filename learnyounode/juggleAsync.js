var http = require('http');

var urls = process.argv.slice(2);
var res = [];

for(var i = 0; i <  urls.length; i++){
    res[i] = null;
}

for(var i = 0; i <  urls.length; i++){
    (function (i){
	http.get(urls[i], function (response){
	    response.setEncoding('utf8');
	    var temp = '';
	    response.on('data', function (data){
		temp += data;
	    });
	    response.on('end', function (){
		res[i] = temp;
		var resCount = 0;
		for(var j = 0; j < res.length; j++){
		    if(res[j] != null) resCount++;
		}
		if(resCount == res.length){
		    for(var j = 0; j < res.length; j++){
			console.log(res[j]);
		    }
		}
	    });
	});
    })(i);
}
