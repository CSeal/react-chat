const EventEmitter = require('events').EventEmitter;
const db = new EventEmitter;
db.setMaxListeners(0);
function Reques(){
	const self = this;

	this.bigData = new Array(1e6).join('*');

	this.onData  = function(info){
		console.log(info);
	}

	this.onError = function(){
		console.log('Unknown error');
		exit();
	}

	db.on('data', this.onData);

	this.end = function(){
		db.removeListener('data', this.onData);
	}
}

setInterval(function(){
	const req = new Reques();
	db.emit('data', 'sdfsdfdsfsffsdf');
	req.end();
	console.log(process.memoryUsage().heapUsed)
}, 200)