const eve = require('events').EventEmitter;
function FileSream(){
	this.file_path = '';
	this.on('readFile', () => {
		console.log('Reading file: ' + this.file_path)
	})
	this.on('writeFile', (response, callback) => {
		console.log('writing file: ' + this.file_path)
		if (typeof(callback) === 'function') {
			callback(response)
		}
	})
}

FileSream.prototype = new eve;

FileSream.prototype.readFile = function(path){
	this.file_path = path;
	this.emit('readFile');
}
FileSream.prototype.writeFile = function(path, text, callback){
	this.file_path = path;
	this.emit('writeFile', text, callback);
}

module.exports = FileSream;

