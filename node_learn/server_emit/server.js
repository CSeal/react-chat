const http = require('http');
const server = new http.Server();
server.listen(3001, '127.0.0.1');

const emiter = server.emit;

server.emit = (emit, ...rest) => {
	console.log(emit);
	rest.unshift(emit);
	emiter.apply(server,  rest);
}

server.on('request', (req, res) => {
	console.log(req.url);
	res.writeHead(200, {'Content-Type': 'text/plain'});
	res.end('hello World1123')
});