const http = require('http');
const path = require('path');
const url = require('url');
const utils = require('util');
const fs = require('fs');

const server = http.createServer((req, res) => {
	console.log('server listen request');
	res.on('error', (err)=>{
		console.log(err);
	})
	switch(req.url){
		case '/':
		{
			const htmlIndexPath = path.join(__dirname, 'index.html');
			fs.readFile(htmlIndexPath, (err, data)=>{
				if(err){
					res.writeHead(404, {'Content-Type': 'text/plain'});
					res.write('Not Found');
					res.end();
					return;
				}
				res.writeHead(200, {'Content-Type': 'text/html'})
				res.write(data.toString());
				res.end();
			})
			break;
		}
		case '/autorizate':
		{
			let body = '';
			req.on('data', (chunck)=>{
				body += decodeURIComponent(chunck); 
			});
			req.on('end', () =>{
				console.log(body.toString('utf8'));
				res.writeHead(200, {"Content-Type": "text/plain; charset=utf-8"})
				res.write('Авторизация выполнена успешно');
				res.end();
			})
			break;
		}
		default:
		{
			res.writeHead(404, {'Content-Type': 'text/plain'});
			res.charSet('utf-8');
			res.write('Not Found');
			return res.end();
		}
	}

}).listen(80, ()=>{
	console.log('Server start on 80 port');
})