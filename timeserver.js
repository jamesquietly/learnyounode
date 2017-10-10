function pad(num) {
    if (num < 10) {
        return "0" + String(num);
    }
    else {
        return String(num);
    }
}

if (process.argv.length > 2) {
    var net = require('net');
    var port = process.argv[2];
    var date = new Date();
    var str = date.getFullYear() + '-' + pad(date.getMonth() + 1) + '-' + pad(date.getDate()) + ' ' + pad(date.getHours()) + ':' + pad(date.getMinutes()) + '\n';
    var server = net.createServer(function (socket) {
        socket.end(str);
    });
    server.listen(port);
}
