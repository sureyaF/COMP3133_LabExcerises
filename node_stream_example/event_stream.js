var events = require('events');
var eventEmitter = new events.EventEmitter();
eventEmitter.on('data_received', function() {
    console.log('data received succesfully.');
});

eventEmitter.emit('data_received'); 