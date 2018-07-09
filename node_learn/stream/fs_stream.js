const fs = require('fs');
const path = require('path');
//fs.readStream extends strem.Readable
const stream = new fs.ReadStream(path.join(__dirname, 'image1.jpg'), {encoding: 'utf-8'});
let count = 0;
stream.on('open', ()=>{
	console.time('readPic');
});

stream.on('readable', ()=>{
	
	const data =  (++count < 2000) ?  stream.read() : stream.destroy(); //event 'end' did not emit, becose stream was destroy before
	data && console.log(data.length);
});

stream.on('end', () => {

	console.log('End read file');
});
stream.on('close', () => {
	console.timeEnd('readPic');
	console.log('File is close')
});


//If erro is exist code is down(throw Error exception), if do not add eventListner 'error'  
stream.on('error', err => {
	if(err.code === 'ENOENT'){
		return console.log('File not found')
	}
	console.err(`Error code: ${err.code}`);
})