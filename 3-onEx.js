// Example 1 — Create an event emitter instance and register a couple of callbacks:

// ! on / addEventListener method:

var emitter = require('events').EventEmitter;

var em = new emitter();

//Subscribe FirstEvent

// ! The addListener : event checks if the event is already registered. 
// If yes, returns the array, otherwise empty array.
// https://www.codeproject.com/Articles/1277373/Code-Your-Own-Event-Emitter-in-Node-js-A-Step-by-s

em.addListener('FirstEvent', function (data) {
    console.log('First subscriber: ' + data);
});

//Subscribe SecondEvent

// ! on: This is just an alias to the ‘addListener’ method. 
// We will be using the ‘on’ method more than the ‘addListener’ method for the sake of convenience.

em.on('SecondEvent', function (data) {
    console.log('First subscriber: ' + data);
});

// Raising FirstEvent
em.emit('FirstEvent', 'This is my first Node.js event emitter example.');

// Raising SecondEvent
em.emit('SecondEvent', 'This is my second Node.js event emitter example.');