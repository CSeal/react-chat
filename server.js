//modules
const http = require('http');
const fs = require('fs');
const path = require('path');
const mime = require('../../Users/CSeal/AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/mime');
const cache = {};

//config const
const publicDir = 'build';
const serverConf = {
	port: 3001,
	host: '127.0.0.1',
	hostAlias: 'localhost'
}

//helpers function
const send404 = res => {
	res.writeHead( 404, {"Content-Type": "text/plain"} );
	res.end("404, Page nod found!");
}


//absPath(example) = ./public/index.html;
const sendFile = (res, filePath, fileContents) => {
	res.writeHead( 200, {"Content-Type" : mime.getType( path.basename( filePath )),
						 "Cache-control" : "no-cache"} );
	res.end( fileContents );
}

const getFile = (res, cache, absPath) => {
	if ( cache[absPath] ){
		sendFile( res, absPath, cache[absPath] );
	} else {
		 fs.exists( absPath, exists => {
			 if( !exists ){
				 send404( res );
			 }
			 fs.readFile( absPath, ( err, data ) => {
				if( err ){
					send404( res );
				}
				cache[absPath] = data;
				sendFile( res, absPath, data );
			 }) 
		 })
	}
}

const staticServer = ( req, res ) => {
	let filePath = '';
	if (req.url === '/'){
		filePath = path.join(__dirname, publicDir, 'index.html');
	} else {
		const requestFile = path.extname(req.url) !== '' ? 
		path.basename(req.url) : 'index.html'
		filePath = path.join(__dirname, publicDir, req.url, requestFile);
	}	
	console.log(filePath);
	getFile(res, cache, filePath);
}

//static server eventListener
const server = http.createServer();
server.listen( serverConf.port, serverConf.hostAlias || serverConf.host);
server.on('request', ( req, res ) => {
	staticServer( req, res );
});
console.log(`Server runing on ${serverConf.hostAlias || serverConf.host} an listning ${serverConf.port}`);
