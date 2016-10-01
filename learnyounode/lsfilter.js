var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(folder, function (err, files){
    if(err) return console.error(err);
    files.forEach(function (file){
	if(path.extname(file) === ext){
	    console.log(file);
	}
    });
});

/*
fs.readdir(process.argv[2], function (err, pathList){
    if(err) throw err;
    var ext = '.' + process.argv[3];
    for(var i = 0; i < pathList.length; i++){
	if(path.extname(pathList[i]) === ext) console.log(pathList[i]);
    }
});
*/
