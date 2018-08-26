const http = require('http');
const server = http.createServer();
server.on('request', (Request, Response) =>{
	console.log('I listen request');
	console.log(Request.method);
	Response.end('Hello World', 'utf8', ()=>{console.log('I finished send')});
})

server.listen(80);
server.on('listening', ()=>{
	console.log('Server was created');
})