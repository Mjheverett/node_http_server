'use strict'

const http = require('http');

const hostname = '127.0.0.1';
const port = 3333;

const server = http.createServer(function(request, response) {
    response.statusCode = 200;
    response.setHeader("Content-type", "text/plain");
    response.end("Hello World");
})

server.listen(port, hostname, function () {
    console.log(`Server running at http://${hostname}:${port}`);
});