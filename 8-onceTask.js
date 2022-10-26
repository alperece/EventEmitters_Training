// ! Handling events only ONCE:

/* 
TASK:
1- Create a http web server
2- Define your local host : 127.0.0.1q
3- Define your port : 8080
4- Use eventEmitter
5- Raising the event and define the message "My first Node.js event has been triggered."
6- Call (Subscribe) for the event and write the message on the screen like "First event: My first Node.js event has been triggered."
7- Create another event and define indefinite loop like "++i" to show new increased number in terminal when call the event!
8- However,show only the number "1" in terminal just one time, evenif you call the event lots of time!!!
9- Write "Hello FwB10" on the page local host!
*/

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


// for some reason, some events should only be handled once throughout the application 
let triggered = 0;
myEmitter.once('event', () => {
  console.log(++triggered);
});
myEmitter.emit('event');
// Prints: 1
myEmitter.emit('event');
// Ignored


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});