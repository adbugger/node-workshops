var filterFunction = require('./filterModule.js');

filterFunction(process.argv[2], process.argv[3], function(err, fileList){
    if(err) throw err;

    fileList.forEach(function (file){
	console.log(file);
    });
});
