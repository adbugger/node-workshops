var net = require('net')
function zero(x){
    return x < 10 ? '0' + x:x;
}
var server = net.createServer(function (socket){
    var d = new Date();
    s = d.getFullYear() + '-'
    + zero(d.getMonth() + 1) + '-'
    + zero(d.getDate()) + ' '
    + zero(d.getHours()) + ':'
    + zero(d.getMinutes()) + '\n';
    socket.write(s);
    socket.end();
});
server.listen(process.argv[2]);
