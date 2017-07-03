var fs = require('fs');

/**
 * Name of the file to parse
 */
var fileName = process.argv[2];

/**
 * Word to censure
 */
var wordToCensure = process.argv[3];

var regex = RegExp('\\b' + wordToCensure + '\\b','g');

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
var writable = fs.createWriteStream(__dirname + '/result.txt');


readable.on('data', function(chunk) {
    chunk = chunk.replace(regex, "***");
    writable.write(chunk);
});

readable.on('end', function(err,data){
    console.timeEnd('timer');
    console.log("finished");
});