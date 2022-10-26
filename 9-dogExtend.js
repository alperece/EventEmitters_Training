/* 
! Extend EventEmitter Class:
In this pattern, we can extend the constructor function from EventEmitter class to emit the events.
 */

/* 
TASK:
- Call same event two times and write the messages on the terminal as below:
        Time to buy another shoe
        Good dog
- 
*/

// Require events to start using them
const EventEmitter = require('events').EventEmitter;

// Dogs have events to publish, or emit
class Dog extends EventEmitter {};

class Food {};

let myDog = new Dog();

// When myDog is chewing, run the following function
myDog.on('chew', (item) => {
    if (item instanceof Food) {
    console.log('Good dog');
    } else {
    console.log(`Time to buy another ${item}`);
    }
    });

    myDog.emit('chew', 'shoe'); // Will result in console.log('Time to buy another shoe')
    
    const bon = new Food();
    myDog.emit('chew', bon); // Will result in console.log('Good dog')