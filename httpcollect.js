if (process.argv.length > 2) {
    var concatStream = require('concat-stream');
    var http = require('http');
    http.get(process.argv[2], function(response) {
        response.pipe(concatStream(function (data) {
            let str = data.toString();
            console.log(str.length);
            console.log(str);
        }));
    });
}
