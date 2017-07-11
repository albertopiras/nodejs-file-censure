# NodeJS File-Censure


This NodeJS program will censure a specific word in a file, giving you a new file.
This is useful if you are handling with very big files.
This project is an exemple of stream approach, reading and dealing with files using NodeJS.

The program will read the file piece per piece, censuring the desired word.
In this way you can censure enough big file, and not only simple short strings.

### How does it work?

This program will create a Readable stream of your .txt input file using a buffer of 256KB.
In this way NodeJS will use chunks (parts of the stream) that will be maximum of that size.
By the way if you load a file of 1MB, NodeJS will parse and compute the entire file "dividing" it in 4 parts.

### How do I get set up? ###


TODO


### Contribution guidelines

TODO


## How to run

$ node app.js path/to/file.txt wordToBeCensured


#### How to run the example:

$ node app.js example/song.txt ass


### Performance comparison 
Under performance-comparision folder you will find two different approaches to censure a file.

The  first example will use the stream approach of this project.
The second example will read synchronously the file, and then it will censure desired words.
You'll see that with big files (like 20MB) the stream approach is faster. 


#### Run Performance comparizion


1) Reading the whole file and searching and replacing all occurrence of the specified word.
2) Reading the file piece per piece, and replacing for each of them the occurrence of the specified word.

### License ###

MIT
