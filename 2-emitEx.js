// get the reference of EventEmitter class of events module
var events = require('events');

//create an object of EventEmitter class by using above reference
var myEventEmitter = new events.EventEmitter();

// ! We define a parameter named "msj" :

function FbW10(msj){
    console.log(msj);
}

//Subscribe for the Event
myEventEmitter.on('Heyy', FbW10);

// ! We passed parameter as a message to the defined function:

/* Ex 1 */
// Raising FirstEvent
myEventEmitter.emit('Heyy','This is my new message to FbW10!');

/* Ex 2 */
myEventEmitter.emit('Heyy',2+2);

/* Ex 3 */
myEventEmitter.emit('Heyy',function abc(){
    console.log('hello')
});
