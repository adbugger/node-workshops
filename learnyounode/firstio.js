var fs = require('fs');
/*
var path = process.argv[2];
var buf = fs.readFileSync(path).toString('utf8');
var lineCount = 0;
for(var i = 0; i < buf.length; i++){
    if(buf[i] === '\n'){
	lineCount += 1;
    }
}
console.log(lineCount);
*/
console.log(fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1);
