var through2 = require('through2');
var upperStream = through2(write);

function write(buffer, encoding, next){
    this.push(buffer.toString().toUpperCase());
    next();
}

process.stdin.pipe(upperStream).pipe(process.stdout);
