var mymodule = require('./mymodule');
var path = process.argv[2];
var filter = process.argv[3];

function callback(err, list) {
    if (err) throw err;
    list.forEach(function(file) {
        console.log(file);
    });
}

mymodule(path, filter, callback);
