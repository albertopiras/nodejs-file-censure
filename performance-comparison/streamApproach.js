
module.exports = function (fileName, regex) {

    var fs = require('fs');
    var promise = new Promise(function (resolve, reject) {
        console.log("--------------------");
        console.time('timer');
        /**
         * Reading Stream
         */
        var readable = fs.createReadStream(__dirname + '/' + fileName, {
            encoding: 'utf8',
            highWaterMark: 256 * 1024
        });

        /**
         * Writing Stream
         */
        var writable = fs.createWriteStream(__dirname + '/output/streamOutput.txt');

        readable.on('data', function (chunk) {
            chunk = chunk.replace(regex, "***");
            writable.write(chunk);
        });

        readable.on('end', function (err, data) {
            if (err) {
                console.log("Error during stream cens.");
                reject(err)
            }
            else {
                console.log("Stream Mode:");
                console.timeEnd('timer');
                resolve(data);
            }
        });
    });

    return promise;
}