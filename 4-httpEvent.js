// ! DO NOT FORGET TO CREATE HTML FILE!

//index.js

const http = require('http');
const events = require('events');

// declare server variables
const hostname = '127.0.0.1';
const port = 8080;

//create an object of EventEmitter class from events module
const myEmitter = new events.EventEmitter();

 //Subscribe for ping event
 myEmitter.on('ping', function (data) {
    console.log('First event: ' + data);
 });

 // Raising ping event
 myEmitter.emit('ping', 'My first Node.js event has been triggered.');

 

/* const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, this is Alper\n');
}); */

// ! Request Event:
// Refactor the HTTP server code to explicitly bind a callback to the 'request' event using the on function.

var server = http.createServer();

server.on('request', function(request, response) {
  response.writeHead(200);
  response.write("Hello, this is Alper");
  response.end(); 
});

// ! Listening Twice:
server.on('request', function(req, res) {
  console.log('New user Request Detected!');
});

// ! Listening for Close:
server.on('close', function(){
  console.log("Closing down the server...");
});

server.listen(port, hostname, () => {
     // We can even return a string built using a template literal
     // easiest and perhaps more readable way to have configurable strings
  console.log(`Server running at http://${hostname}:${port}/`);
});


// ! Optional:
// Expose the event emitter
module.exports = myEmitter