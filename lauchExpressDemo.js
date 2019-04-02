const express = require('express');
const http = require('http');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use((req, resp, next) => {
    console.log("server is running");
    resp.statusCode = 200;
    resp.setHeader('Content-Type', 'text/html');
    resp.end('<html><body>Salida server</body></html>');
})
const server = http.createServer(app);
server.listen(port, hostname, () =>{
     console.log(`server is running in port ${port} and server ${hostname}`);    
} )

// app.listen(1200, () => {
//     console.log('server is running in 1200 port');
// } )