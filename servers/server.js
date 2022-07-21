// ! Requiring the core module
const astroServer = require('http');
const { hostname } = require('os');

// * Will be use for html

const fs  = require('fs');
// [npm i moment]
const moment = require('moment');

const eid = '2022-07-09';
console.log(eid);
// Formate using [moment]
console.log(moment(eid).format('LL'));

const port = 5000;
// const hostname = 'localhost'


// ! it takes in a request object and a response object as (parameters).
// ! the request objects contains like the request [ url ]
const astroConstant = astroServer.createServer((req, res) => {


    // console.log("A request was made.");
    // console.log(req);
    // console.log('request url', req.url);
    // console.log('request method', req.method);

    // ! Response Object
    
    // ! will send a plain text to the browser
    // res.setHeader('Content-Type', 'text/plain');

    // ! Changing to html
    res.setHeader('Content-Type', 'text/html');
    // res.write('My name is ibraheem omikunle');
    // res.write('<body class="ibraheem"></body>')
    // res.write('<h1>My name is ibraheem omikunle</h1>');
    // res.write('<p>Good morning</p>');

    fs.readFile('../view/index.html', (err, data) => {
        if(err) {
            console.log(err)
            res.end()
        } else {
             res.write(data);
            //  ! [ OR ]
                res.end(DataTransferItem);

        }
    })
})
// * To listen for the request that is been sent to the server.
// * invoking a listening method
// astroConstant.listen(port, hostname, () => {
//     console.log(`listening on port ${port}`);
// })

// ! You also run the server without using the host name

astroConstant.listen(port, () => {
    console.log(`listening on port ${port}`);
});

// ! the request object represent the http request and contains the information about the end user sent.


// npm install -g nodemon
// nodemon [server]
// To intialize a [package.json] file it will enable us to know the package that we have installed you have to press [npm init] and go through the commands. it also help us keep track of our project dependency, that we have installed locally into our project.
// another way to init npm is by pressing [npm init --y]