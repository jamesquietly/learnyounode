
module.exports = function (path, filter, callback) {
        var fs = require('fs');

        fs.readdir(path, function (err, list) {
            if (err) {
                return callback(err);
            }

            list = list.filter(function(item) {
                let name = item.split('.');
                if (name[1] === filter) return true;
            });

            callback(null, list);
        });
}
