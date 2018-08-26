const http = require('http');
const server = http.createServer((req, res)=>{
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.write('Hello Anton');
	res.end()
}).listen(80, ()=>{
	console.log('Server listen 80 port');
})