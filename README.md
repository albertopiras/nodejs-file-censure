# NodeJS File-Censure


This NodeJS program will censure a specific word in a file, giving you a new file.
This is useful if you are handling with very big files.
This project is an exemple of stream approach, reading and dealing with files using NodeJS.

The program will read the file piece per piece, censuring the desired word.
In this way you can parse very big files, like logs (or a long pohem like the indian Mahabharata) and not only simple short strings.

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

The example offers the "Burn It to the ground" - Nickelback song.
Lets censure a specific word. 

$ node app.js example/song.txt ass

This will give back to you the censuredFile.txt


### Performance comparison 
Under performance-comparision folder you will find two different approaches to censure a file.

The  first example will use the stream approach of this project, piece per piece, replacing for each part the occurrence of the specified word.

The second example will read synchronously the whole file and will search and replace all occurrence of the specified word.

You'll see that with big files (eg 20MB) the stream approach is faster. 


#### Run Performance comparizion


$ cd performance-comparison

$ node comparison.js ../example/song-50.txt ass

the result should be similar to this:

    --------------------
    Stream Mode:
    timer: 186.985ms
    --------------------
    Sync Mode:
    timerSync: 300.790ms
    --------------------


Now, if you parse a 100 MB file the results will be these:
$ node comparison.js ../example/song3.txt ass

    --------------------
    Stream Mode:
    timer: 351.348ms
    --------------------
    Sync Mode:
    timerSync: 641.620ms
    --------------------


The more the file is big, the more the stream approach is efficent.


### License ###

MIT




