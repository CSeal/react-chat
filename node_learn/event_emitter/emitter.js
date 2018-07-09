const EventEmitter = require('events').EventEmitter;
const server = new EventEmitter;

server.on('request', request =>{
	request.test = true;
});

server.on('request', request =>{
	console.log(request);
});

server.emit('request', {from: 'Anton'});
server.emit('request', {to: 'chicago'});

console.log(server.listeners('request')[0], server.listenerCount('request'));

server.on('error', err => {
	console.log('sdfesfdx');
	console.log(err.message)
});

server.emit('error', new Error('Node is down'));
