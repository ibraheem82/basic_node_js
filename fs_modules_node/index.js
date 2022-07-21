// ! [ fs ] stands for the file system module
const file_system = require('fs')

// * Reading file
// file_system.readFile('./name.txt', (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
    // console.log(data);
//         console.log(data.toString());
//     }
// });


// * Writing file
// file_system.writeFile('./name.txt', "Hello wordl", (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Hello");
 
//     }
// });

// * Appending file
// file_system.appendFile('./name.txt', "good Morning", (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Ibraheem");
//     }
// });


// * Typing the message on a new line
// file_system.appendFile('./name.txt', 'good Morning 2\r\n', (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Ibraheem");
//     }
// });



// * Creating a new directory

// ? Check if the folder does not exist 

// if(!file_system.existsSync('ibraheem')){
//     file_system.mkdir('ibraheem', (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("Ibraheem folder was created.");
//     }
// })
// } else {
//     console.log("The folder ibraheem already exist");
// }


// * Deleting a folder
// if(file_system.existsSync('ibraheem')){
    // ! Remove directory
//     file_system.rmdir('ibraheem', (err, data) => {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log("A folder was deleted.");
//     }
// })
// } else {
//     console.log("The folder already deleted");
// }



// * Deleting a file
if(file_system.existsSync('./name.txt')){
    // 
    file_system.unlink('./name.txt', (err, data) => {
    if(err) {
        console.log(err);
    } else {
        console.log("A file was deleted.");
    }
})
} else {
    console.log("The file already deleted");
}