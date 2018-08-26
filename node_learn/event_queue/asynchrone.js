const eve = require('events').EventEmitter;
const emitter = new eve;
emitter.on('event', () => {
	setImmediate(()=> {
		console.log('Event #1');
	})
});
emitter.on('event', () => {
		console.log('Event #2');
});
emitter.on('event', () => {
	setImmediate(()=> {
		console.log('Event #3');
	})
});

emitter.emit('event');
emitter.emit('event');
emitter.emit('event');
emitter.emit('event');