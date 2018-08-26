const http = require('http');
http.createServer((req, res)=>{
	console.log(req.rawHeaders);
	res.setHeader('Content-Type', 'text/html');
	console.log(res.getHeader('Content-Type'));
	res.sendDate = false;
	console.log(res.headersSent);
	res.end('<h1>Hello world</h1>')
	console.log(res.headersSent);
}).listen(80, 'localhost');