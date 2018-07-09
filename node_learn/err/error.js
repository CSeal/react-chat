const util = require('util');
const err  = require('./myerror.js');
//console.log(err);
const phrases = {
	hello: 'Привет',
	world: 'Мир'
}

const getPrases = (name) => {
	if( name in phrases){
		return phrases[name];
	}
	throw  new err.PhrasesError(util.format('нет такой фразы: %s', name));
}

const getPage = (url) => {
	if(url !== 'index.html'){
		throw new err.PageError(404, util.format('url:  %s is undefined', url));
	}
	return url;
}

try{
	let mess = getPrases('hello');
	console.log(mess);
	let page = getPage('index');
	console.log(page);
}catch(e){
	//console.log(e);
	if(e instanceof err.PhrasesError){
		console.log(e.message, e.stack);
	}else{
		console.log(e.status, e.message);
	}
}
