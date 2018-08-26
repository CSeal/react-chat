const eve = require('events').EventEmitter;
const emitter = new eve;
emitter.on('newListener', (event, listener) => {
	if (event === 'myEvent') {
		console.log('listener add on myEvent Event');
	}
})

emitter.on('removeListener', (event, listener) => {
	if (event === 'myEvent') {
		console.log('listener remove on myEvent Event');
	}
})

emitter.on('myEvent', test);
emitter.emit('myEvent');
console.log(emitter.listenerCount('myEvent'));
emitter.removeListener('myEvent', test);
emitter.emit('myEvent');
console.log(emitter.listenerCount('myEvent'));

function test(){
	console.log('Some Text');
}