// ! on / addEventListener method:

var emitter = require('events').EventEmitter;

const eventEmitter = new emitter();

function func1() {
    console.log("EVENT TRIGGERED");
}

eventEmitter.on("myEvent", func1);
eventEmitter.on("myEvent2", func1);

console.log(eventEmitter.eventNames());
eventEmitter.removeListener("myEvent", func1);
console.log(eventEmitter.eventNames());

/* 
! Basic
emitter.off('eventName', callback);

! Removing every listeners attached to the given event
emitter.off('eventName');

! Removing the callback from any event
emitter.off(callback);

! Polymorphisms
emitter.off(['event1', 'event2'], callback);

emitter.off({
	event1: callback1,
	event2: callback2
});

! Removing every listeners
emitter.unbindAll();
*/