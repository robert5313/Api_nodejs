//The http is used call the http module
const http = require('http');


//The http.createServer() method creates an HTTP Server object.
http.createServer(function (req, res) {
    //Calling response.writeHead method
    res.writeHead(200, {'Content-Type': 'text/html'});
    //Calling response.end method
    res.end('Hello World!');
    //The server object listens on port 8080
}).listen(8080);


//