var through2 = require('through2')
var split = require('split')

var lineCount = 1;
var tr = through2(function (buf, enc, next){
    var line = buf.toString();
    this.push(lineCount % 2 === 1
	? line.toLowerCase() + '\n'
	: line.toUpperCase() + '\n' );
    lineCount++;
    next();
});

process.stdin
    .pipe(split())
    .pipe(tr)
    .pipe(process.stdout);
