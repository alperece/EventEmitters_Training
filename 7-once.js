// ! Handling events only ONCE:

const events = require('events');
const eventEmitter = new events.EventEmitter();

function merhaba() {
  console.log('Merhaba Dünya');
}

eventEmitter.once('yaz', merhaba);

eventEmitter.emit('yaz');
eventEmitter.emit('yaz');
eventEmitter.emit('yaz');