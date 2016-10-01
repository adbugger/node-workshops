module.exports = function (dirName, fileExt, callback){
    var fs = require('fs');
    var path = require('path');
    
    fs.readdir(dirName, function (err, files){
	if(err) return callback(err);

	var extName = '.' + fileExt;
	files = files.filter(function (file){
	    return path.extname(file) === extName;
	});

	return callback(null, files);
    });
};
