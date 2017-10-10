


if (process.argv.length > 2) {
    var bl = require('bl');
    var http = require('http');
    var result = [];
    var argCount = process.argv.length - 2;

    function printResults() {
        for (let i = 0; i < result.length; i++) {
            console.log(result[i]);
        }
    }

    function getData(index) {
        http.get(process.argv[2 + index], function(response) {
            response.pipe(bl(function (err, data) {
                if (err) return console.error(err);

                result[index] = data.toString();

                if (result.length === argCount) {
                    printResults();
                }
            }));
        });
    }

    for (let i = 0; i < argCount; i++) {
        getData(i);
    }
}
