var fs = require('fs');
var Promise = require('promise');


var streamApproach = require('./streamApproach');
var syncApproach = require('./syncApproach');

/**
 * Name of the file to parse
 */
var fileName = process.argv[2];

/**
 * Word to censure
 */
var wordToCensure = process.argv[3];
var regex = RegExp('\\b' + wordToCensure + '\\b', 'g');

console.time('timer');


streamApproach(fileName, regex).then(function (succ, err) {
    if (err) {
        console.error('Error during performance comparison - quit');
        return;
    }
    syncApproach(fileName, regex);
})





