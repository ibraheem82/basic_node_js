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
        res.statusCode = 200;
        break;


    case '/contact':
        route += 'contact.html';
        res.statusCode = 200;
        break;


    case '/contact-us':
        // when you want to redirect the user to the same page
        res.statusCode = 301;
        res.setHeader('Location', '/contact')
        res.end()
        break;

    default:
        route += '404.html';
        res.statusCode = 200;
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