var fs = require('fs');

var fileName = process.argv[2];

var wordToCensure = process.argv[3];

var regex = RegExp('\\b' + wordToCensure + '\\b','g');


var readable = fs.createReadStream(__dirname + '/' + fileName, {
    encoding: 'utf8',
    highWaterMark: 1 * 1024
});

var writable = fs.createWriteStream(__dirname + '/copy.txt');

readable.on('data', function(chunk) {

    chunk = chunk.replace(regex, "*****");

    writable.write(chunk);
});