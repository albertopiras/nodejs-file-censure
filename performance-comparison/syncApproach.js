
module.exports = function (fileName, regex) {
var fs = require('fs');
    console.log("--------------------");
    console.time('timerSync');

    var myfile = fs.readFileSync(__dirname + '/' + fileName, 'utf8');

    var tempCensured = myfile.replace(regex, "***");

    fs.writeFile("syncOutput.txt", tempCensured, function (err) {
        console.log("Stream Reading:");
        console.timeEnd('timerSync');
        console.log("--------------------");
    });
}

