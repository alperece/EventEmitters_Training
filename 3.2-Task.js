var events = require('events');
var EventEmitter = events.EventEmitter;

var chat = new EventEmitter;
var users = [], chatlog = [];

chat.on('message', function(message){
	chatlog.push(message);
    console.log(message);
});

chat.on('join', function(nickname) {
  users.push(nickname);
  console.log(nickname);
});

// Emit events here
chat.emit('join', 'Car');
chat.emit('message', 'Hello');