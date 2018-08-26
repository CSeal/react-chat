const http = require('http');
const utils = require('util');
const server = http.createServer((req, res)=>{
const requestInfo = utils.format('HttpVersion %s \nMethod %s \nSatusCode %s \nMesage %s \nUrl %s',
req.httpVersion,
req.method,
req.statusCode,
req.statusMessage,
req.url);
console.log(requestInfo);
for(let key in req.headers){
	console.log(`Headers ${key} => ${req.headers[key]}`)
}
res.end()
}).listen(80, 'localhost');