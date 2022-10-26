/* 
Event Emitters play a very important role in the Node.js ecosystem.

!!! Node.js EventEmitter Class:

Node.js allows us to create and handle custom events easily by using events module. 
Event module includes EventEmitter class which can be used to raise and handle custom events.

! What is EventEmitter?
Node JS “events” module has one and only one class to handle events: EventEmitter class. 
It contains all required functions to take care of generating events.

! Who is responsible to generate events in Node JS Application ?
EventEmitter class is responsible to generate events. 
Generating events is also known as Emitting. 
That’s why this class name is EventEmitter as it emits events in Node JS Platform.

! Who is responsible to handle events in Node JS Application ?
Node JS Platform uses the following two components to take of events.

- EventEmitter class
- Java Script Callback functions

So, EventEmitter class is responsible to generate events and Java Script Callback functions are responsible to handle them.

EventEmmitter => Event Queue => Event Loop => Event Handlers

- When Node JS application starts or ends an operation, EventEmitter class generates events and places them into Event Queue.
- Event Queue maintains a Queue of Events.
- Event Loop continuously waits for new events in Event Queue. When it finds events in Event Queue, it pulls them and try to process them. If they require IO Blocking operations or long waiting tasks, then assigns respective Event Handlers to handle them.
- Event Handlers are JavaScript Asynchronous Callback Functions. They are responsible to handle events and return results to Event Loop.
- Event Loop will prepare results and send them back to the Client.

! First thing to start Node JS Events is that import “events” module as shown below:

var events = require("events");

! Then use this events variable and create an object of EventEmitter class as shown below:

var eventsEmitter = new events.EventEmitter();



*/

// Example for EventEmitter class for raising and handling a custom event:

// get the reference of EventEmitter class of events module
var events = require('events');

//create an object of EventEmitter class by using above reference
var myEventEmitter = new events.EventEmitter();

function FbW10(){
    console.log('We are learning NodeJS!');
}

/* 
! EventEmitter “on()” function
EventEmitter class has a “on()” function, which is used to bind an Event with an Event Handler JavaScript Function. It takes two parameters.

eventsEmitter.on(NameOfEventToBind, EventHandlerFuction); 
*/

myEventEmitter.on('Heyy', FbW10);

//Once
/* myEventEmitter.once('Heyy', FbW10); */

/* 
! EventEmitter “emit()” function
EventEmitter class has a “emit()” function, which is used to create an Event. It takes one parameter.

eventsEmitter.emit(NameOfEventToCreate);
*/

myEventEmitter.emit('Heyy');
myEventEmitter.emit('Heyy');
myEventEmitter.emit('Heyy');

