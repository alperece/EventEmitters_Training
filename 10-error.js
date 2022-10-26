// Error events

const http = require('http');
const events = require('events');

// declare server variables
const hostname = '127.0.0.1';
const port = 8080;

//create an object of EventEmitter class from events module
const myEmitter = new events.EventEmitter();

//Subscribe for ping event
 myEmitter.on('ping', function (data) {   
 console.log('First subscriber: ' + data);
 });

 // Raising ping event
myEmitter.emit('ping', 'This is my first Node.js event emitter example.');

let triggered = 0;
myEmitter.once('event', () => {
  console.log(++triggered);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
// Ignored

myEmitter.on('error', (err) => {
  console.error('whoops! there was an error bro!' + err);
 });
myEmitter.emit('error', new Error('whoops!'));
 // Prints: whoops! there was an error to the console

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});