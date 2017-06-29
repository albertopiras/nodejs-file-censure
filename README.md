NodeJS Censure File Words

This NodeJS program will give you a copy of a file censuring the words you want.

The file will be read a part for time, and for each part will be censured the desired word.
In this way you can censure enouth big file, and not only simple short text.


### What is this repository for?


### How does it work?

This program will create a Readable stream of your .txt input file using a buffer of 1KB.
In this way NodeJS will use chunks (parts of the stream) of that maximum size.
By the way if you load a file of 6 KB, NodeJS will "divide" your file in 6 parts and censure your word in each of them.

TODO_IMPROVE this first description

### How do I get set up? ###


TODO


### Contribution guidelines

TODO


## How to run

$ node app.js path/to/file.txt wordToBeCensured


#### How to run the example:

$ node app.js example/song.txt ass



### License ###

MIT
