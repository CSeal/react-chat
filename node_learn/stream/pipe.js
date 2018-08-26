const fs = require('fs');

const readStream = fs.createReadStream('output.txt');
const writeStream = fs.createWriteStream('newFile.txt');
readStream.pipe(writeStream);
readStream.on('end', ()=>{
	console.log('Data has writing');
})