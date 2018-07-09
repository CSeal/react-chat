const util = require('util');

function PhrasesError(message){
	this.message = message;
	Error.captureStackTrace(this, PhrasesError);
	
}

util.inherits(PhrasesError, Error);
PhrasesError.prototype.name = 'PhrasesError';

function PageError(status, message){
	this.message = message;
	this.status = status
}

PageError.prototype.name = 'PageError';

util.inherits(PageError, Error);
module.exports = {
	PhrasesError,
	PageError
}
