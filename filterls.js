if (process.argv.length > 3) {
    var path = process.argv[2];
    var filter = process.argv[3];
    var fs = require('fs');

    fs.readdir(path, function callback(err, list) {
        if (err) {
            console.log(err);
        }

        for (let i = 0; i < list.length; i++) {
            let name = list[i].split('.');
            if (name[1] === filter) {
                console.log(list[i]);
            }
        }

    });
}
