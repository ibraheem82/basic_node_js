var http = require('http');
var dateTime = require('../testing/date.js');

//create a server object:
http.createServer(function (req, res) {

    // * If the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type:
  res.writeHead(200, {'Content-Type': 'text/html'});

   //write a response to the client
  res.write("The date and time are currently: " + dateTime.myDateTime());
res.write('<h1>The date and time are currently: </h1>'  + dateTime.myDateTime());
res.write(`<h1 style="color: green"; >The date and time are currently:   ${dateTime.myDateTime()} </h1>`);
 //end the response
  res.end();
   //the server object listens on port 8080
}).listen(8080);