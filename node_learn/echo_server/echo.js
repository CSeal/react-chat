//task http://localhost:3008/echo?message=vasya => vasya
const http = require('http');
const url = require('url');
const server = new http.Server((req, res) => {
	const {method} = req;
	const parsedUrl = url.parse(req.url, true);
	const {pathname, query:{message}} = parsedUrl;
	if(pathname === '/echo' && message){
		res.statusCode = 200;
		res.setHeader('Content-Type', 'text/plain');
		res.setHeader('Cache-Control', 'no-cache');
		debugger; ///debug echo.js   'repl' to debug
		res.end(message + ' 123!');
	}else{
		res.statusCode = 404;
		res.end('Not Found');
	}
})
server.listen(3003, 'localhost');