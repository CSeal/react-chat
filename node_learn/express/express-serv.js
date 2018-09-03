const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const url = require('url');
const path = require('path');

const contents = {
	'home':'Welcome.home',
	'about': 'Hi! Page about AS',
	'news': 'It is a news page',
	'register': `<form action="/register"method='post' name='register'>
					<h3>Form register</h3>
					<label for="login">
						login
						<input type="text" name="login" id="login">
					</label>
					<label for="email">
						email
						<input type="email" name="email" id="email">
					</label>
					<label for="password">
						password
						<input type="password" name="password" id="password">
					</label>
					<label for="password-confirm">
						password-confirm
						<input type="password" name="password-confirm" id="password-confirm">
					</label>
					<button>Send</button>
				</form>`,
	'autorize': `<form action="/autorize"method='post' name='autorize'>
					<h3>Form autorize</h3>
					<label for="login">
						login
						<input type="text" name="login" id="login">
					</label>
					<label for="password">
						password
						<input type="password" name="password" id="password">
					</label>
					<button>Send</button>
				</form>` 
}


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/autorize', (req, res) =>{
	fs.writeFile(path.join(__dirname, 'autorize.txt'), JSON.stringify(req.body, null, 2), {flag :'a'}, (err)=>{
		return console.log(err);
	})
 res.redirect(302, '/autorize');
})

app.post('/register', (req, res) =>{
	fs.writeFile(path.join(__dirname, 'register.txt'), JSON.stringify(req.body, null, 2), {flag :'a'}, (err)=>{
		return console.log(err);
	})
 res.redirect(302, '/register');
})

app.get('/:link?', (req, res) =>{
	const indexFilepath = path.join(__dirname,'head.html');
	
	fs.readFile(indexFilepath, (err, htmlIndexData) => {
		if (err) {
			return console.log(err);
		}
		const content = (req.params.link && contents[req.params.link]) || contents['home'];
		const htmlIndexFile = htmlIndexData.toString().replace('#сontent', content);
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end(htmlIndexFile);
	})
})

app.get('/style.css', (req, res) =>{
	const stylePath = path.join(__dirname,'style.css');
	
	fs.readFile(stylePath, (err, styleData) =>{
		if (err) {
			return console.log(err);
		}
		res.writeHead(200, {'Content-Type': 'text/css'});
		res.write(styleData);
		res.end();
	})	
})

app.listen(3000, ()=>{
	console.log('server run on 3000 port');
})
