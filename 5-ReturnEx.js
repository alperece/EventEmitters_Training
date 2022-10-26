/* 
! Common Patterns for EventEmitters
There are two common patterns that can be used to raise and bind an event using EventEmitter class in Node.js.

1- Return EventEmitter from a function
2- Extend the EventEmitter class

! Return EventEmitter from a function
In this pattern, a constructor function returns an EventEmitter object, which was used to emit events inside a function. This EventEmitter object can be used to subscribe for the events. 

*/

// In the bank or (ausländerbehörde), you are on the queue
// There is a screen on the wall
// Each person has just 2000 ms = 2 second :)
// Use setTimeout method to set the time
// Also, use Event module and EventEmitter class

// Print below messages by using console.log on the terminal (screen)

/* 
The process is started for customer 1
Processing number:1
Completed processing 1
The process is started for customer 2
Processing number:2
Completed processing 2
The process is started for customer 3
Processing number:3
Completed processing 3 
*/




// ! Example: Return EventEmitter from a function

// EventEmitter is like call back functions!!

// ! 1st Way:
const events = require('events');
const eventEmitter = new events.EventEmitter();

// ! 2nd Way:
/* var emitter = require('events').EventEmitter;
var e = new emitter(); */

function LoopProcessor1(num) {

    setTimeout(function () {
        
        for (var i = 1; i <= num; i++) {

            // first we create an object of EventEmitter class and then use it to emit 'BeforeProcess' and 'AfterProcess' events.

            eventEmitter.emit('BeforeProcess', i);
            
            console.log('Processing number:' + i);
            
            eventEmitter.emit('AfterProcess', i);
        }
    }
    , 2000)

    // Finally, we return an object of EventEmitter from the function. 
    return eventEmitter;
}

// So now, we can use the return value of LoopProcessor function to bind these events using on() or addListener() function.

var lp1 = LoopProcessor1(3);

lp1.on('BeforeProcess', function (data) {
    console.log('About to start the process for ' + data);
});

lp1.on('AfterProcess', function (data) {
    console.log('Completed processing ' + data);
});

/* 
More Info:
https://www.tutorialsteacher.com/nodejs/nodejs-eventemitter

*/