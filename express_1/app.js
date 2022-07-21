const express  = require('express');
const app  = express();

// Responding to the request.
app.get('/', function(req, res) {
    // res.send('Good Afternoon')
    res.send('<h1>My name is ibraheem omikunle</h1>')
})

// the [req] is the [request] it contains informations about the [url] and also the [ GET or POST] method.

// the [res] is use to send response

// Setting up the express app and listening for the port.
app.listen(8000);