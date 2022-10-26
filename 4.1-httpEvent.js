const server = require('./4-httpEvent.js')
// Since the server exported an event emitter, we can listen to it for changes:
server.on('request', (method, url) => {
console.log(`Got a request: ${method} ${url}`)
})


var http = require('http');

var server = http.createServer();
server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is dog");
  response.end();
});