const http = require("http");
const fs = require("fs");


http.createServer((request, response) => {
    //console.log(request);
    response.writeHead(200,{
        'Content-Type': 'text/html'
        });
    response.statusCode = 200;
    // 2. Write the announced text to the body of the page
    //response.write('Hello, World de Jorge!\n');
    // 3. Tell the server that all of the response headers and body have been sent
    response.end('<html><body>Salida de responde</body></html>');
    if(request.method = "GET")
    {
        
        var file = "";
        var extFile = "";
        extFile = request.url.extFile;
        if(request.url == "/") file = "outHtml.html";
        if(extFile = ".html")
        {
            console.log('Your required html file');
        }
        else
        {
            console.log('you choosen another file extension');
        }
            
    }
}).listen(1337, 'localhost', () => {
    console.log(`server running in http://${'localhost'}:${1337}`);
}); // 4. Tells the server what port to be on
