# NodeJS File-Censure


This NodeJS program will censure a specific word in a file, giving you a new file using the Stream approach. 
The more the file is big, the more the stream approach is efficent.


The program will read the file piece per piece, censuring the desired words.
In this way you can parse very big files, like logs (or a long pohem like the indian Mahabharata) and not only simple short strings.

### How does it work?

This program will create a Readable stream of your .txt input file using a buffer of 256KB.
So NodeJS will use chunks (parts of the stream) that will be maximum of that size.
By the way if you load a file of 1MB, NodeJS will parse and compute the entire file "dividing" it in 4 parts.


## How to use

$ node app.js path/to/file.txt wordToBeCensured


#### How to run the example:

The example offers the "Burn It to the ground" - Nickelback song.
Lets censure a specific word. 

$ node app.js examples/song.txt ass

This will give back to you the censuredFile.txt


### Performance comparison 
Under performance-comparision folder you will find two different approaches to censure a file.

The  first example will use the stream approach of this project, piece per piece, replacing for each part the occurrence of the specified word.

The second example will read synchronously the whole file and will search and replace all occurrence of the specified word.

#### How is it structured

There are two modules for the two different approaches, "streamApproach" and "syncApproach".

The main app "comparison" import that two modules.
It runs the streamApproach first, that returns a Promise.
At the end of the first computation, the main app runs the syncApproach.

The console output will be similar to this.

--------------------
Stream Mode:
timer: 186.985ms
--------------------
Sync Mode:
timerSync: 300.790ms
--------------------

You'll see that with big files (eg 20MB) the stream approach is faster than sync approach. 


#### Run Performance comparizion

To run performance comparison follow the instructions:

$ npm install (to install node-promise dependency)

$ cd performance-comparison


Let's try performance with a 50MB file.

$ node comparison.js ../examples/song-50MB.txt ass

the result should be similar to this:

    --------------------
    Stream Mode:
    timer: 186.985ms
    --------------------
    Sync Mode:
    timerSync: 300.790ms
    --------------------


Now, if you parse a 100 MB file the results would be these:
$ node comparison.js ../example/song-100MB.txt glass

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




