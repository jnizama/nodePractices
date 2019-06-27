const express = require('express');
const http = require('http');
const morgan = require('morgan')
const bodyParser = require('body-parser');
const dishRouter = require('./routers/dishRouter');
const leaderRouter = require('./routers/leaderRouter');
const promoRouter = require('./routers/promoRouter');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));

app.use(bodyParser.json());

app.use('/dishes', dishRouter);
app.use('/leaders', leaderRouter);
app.use('/promos', promoRouter);

//using statis files like html, png, and so on.
//By default express leera __dirname/public y al encontrar index.html entonces se vera este file primero,
//de lo contrario mostrara la salida x defecto en resp.end(...)
//app.use(express.static(__dirname + '/public'));  //__dirname = info about path of current scripting is running

app.all('/dishes', (req, resp, next) => {
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'text/html');
    //resp.end("<h1>hola dishesh</h1>");
    console.log('solicitó /dishes');
    next();
});
app.get('/dishes', (req, resp, next) => {
    resp.end("usted solicitó dishes (get)");
    console.log('solicitó /dishes-get')
});
app.get('/dishes/:dishesId', (req, resp, next) => {
    resp.end("usted solicitó dishes (get) con el ID: " + req.params.dishesId + ' to you!');
    console.log('solicitó /dishes-get')
});
app.post('/dishes', (req, resp, next) => {
    resp.end("usted solicitó dishes (post) " + req.body.name);
    console.log('solicitó /dishes-post')
});

app.use((req, resp, next) => {
    console.log("server is running");
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'text/html');
    resp.end('<html><body>Salida server</body></html>');
});

const server = http.createServer(app);
server.listen(port, hostname, () => {
    console.log(`server is running in port ${port} and server ${hostname}`);
});