const http = require('http');
const path = require('path');
const fs = require('fs');
const mime = require('mime');
const url = require('url');
const fileRegExp = /^[^\.]*\.(:?png)|(:?jpg)|(:?jpeg)$/i;

http.createServer((req, res) => {
	const parsedUrl = url.parse(req.url);
	const getFile = path.basename(parsedUrl.path);
	const pathToFileOnFs = path.join(__dirname, getFile);
	if(req.method !== 'GET' && !fileRegExp.test(getFile)){
		res.end();
	}
	
	//Not best practis, becose file is big or client is slow
	// fs.readFile(pathToFileOnFs, (err, img) => {
	// 	if(err){
	// 		res.statusCode = 404;
	// 		res.statusMessage = 'Image not found';
	// 		res.end('Image not found');
	// 	}else{
	// 		res.statusCode = 200;
	// 		res.setHeader('Conetn-Type', mime.getType(pathToFileOnFs));
	// 		res.setHeader('Cache-Control', 'no-cache, no-story');
	// 		res.end(img);
	// 	}
		
	// });

	const fileStream = new fs.ReadStream(pathToFileOnFs);
	//readFile(fileStream, res);
	sendFile(fileStream, res);
}).listen(3002);

function readFile(fileStream, writeStream){
	fileStream.on('readable', write);
	function write(){
		let content = fileStream.read();//read
		if(content && !writeStream.write(content)){//response. true if respons is quickle and false if responae is slow and buffer is verybig
			fileStream.removeListener('readable', write);
			writeStream.once('drain', () => {//waite
				fileStream.on('readable', write);
				write();
			});
		} 
	}
	fileStream.on('end', () => { //close tcp conection. you can see data in browser
		writeStream.end();
	});
}
function sendFile(file, res){
	file.pipe(res);
	file.on('error', err => {
		res.statusCode = 500;
		res.send('Server error');
	});

	res.on('close', () => {
		file.destroy();
	})
}