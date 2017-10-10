if (process.argv.length > 2) {
    var http = require('http');
    var map = require('through2-map');
    const server = http.createServer(function (req, res) {
        if (req.method !== 'POST') {
            return res.end('Give me a POST\n');
        }
        req.pipe(map(function (chunk) {
            return chunk.toString().toUpperCase();
        })).pipe(res);
    })

    server.listen(Number(process.argv[2]));
}    
