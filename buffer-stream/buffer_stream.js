const bufferStream = require('fs');

// ! [ Encoding ] method makes it more readable
const readStream = bufferStream.createReadStream('b-s.txt', {encoding: 'utf-8' });


const writeStream = bufferStream.createWriteStream('ibraheem.txt');
// readStream.on('data', chunk => {
//     console.log('******** These are the new chunks of datas *******');
    // console.log(chunk.toString());
    // !
//     console.log(chunk);


//     writeStream.write('\n ####### new chunks in another file ######\n');
//     writeStream.write(chunk);
// })


                                        // ! [  OR  ]


// * Stream.pipe() is use to take readable [stream] and connect it to writable stream
// it wiil create that same file and write the texts inside it.
readStream.pipe(writeStream);