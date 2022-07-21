
const astroServer = require('http');
const { hostname } = require('os');


const fs  = require('fs');

const port = 5000;



const astroConstant = astroServer.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html');
    let route = "../views/";

switch (req.url) {
    case '/':
        route += 'index.html';
        break;


    case '/contact':
        route += 'contact.html';
        break;

    default:
        route += '404.html';
        break;
}
    fs.readFile(route, (err, data) => {
        if(err) {
            console.log(err)
            res.end()
        } else {
             res.write(data);

        }
    })
});