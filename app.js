var http = require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.end('Hello World!');
}).listen(8080);

// console.log("Ibraheem Omikunle");

// console.log(global);

// global.setTimeout(() => {
//    console.log("Timeout Now."); 
// }, 4000);


// ! Get the current directory name
// console.log(__dirname);
// ! Get the file name
// console.log(__filename);




// const importPeople = require('./people');
// ! Importing all
// console.log(importPeople);

// ! Importing just a single thing
// console.log(importPeople.languages);

// * ! [ NOTE ] a better way to import multiple different things from the file is to use the [destructuring method]

// const {people, languages} = require('./people');
// console.log(languages);