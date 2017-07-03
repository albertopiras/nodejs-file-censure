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

var myfile = fs.readFileSync(__dirname + '/' + fileName, 'utf8');

var tempCensured = myfile.replace(regex, "***");

fs.writeFile("output.txt", tempCensured, function(err) {
    console.timeEnd('timer');
    console.log("finished");
});

