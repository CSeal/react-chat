const event = require('events');
const FileReader = function(){
	this.file = '';
}
FileReader.prototype = new event.EventEmitter();

FileReader.prototype.readDataFromFile = function(path, collback){
	this.file = path;
	if (typeof(collback) === 'function') {
		this.on('readFile', collback);
	}
	this._read();
}
FileReader.prototype._read = function(){
	console.log('Loading...');
	const fileData = 'text text text';
	console.log('File is reading');
	this.emit('readFile', fileData);
}
module.exports = FileReader;
