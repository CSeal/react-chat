const fs = require('fs');
const writeData = 'It is a Data Content';

const writeStrem = fs.createWriteStream('output.txt');
writeStrem.write(writeData, 'utf8');
writeStrem.end();
writeStrem.on('finish', ()=>{
	console.log('Write Data finished');
});
writeStrem.on('error', (err)=>{
	console.log(err);
})

let readableData = '';

const readStream = fs.createReadStream('output.txt');
readStream.setEncoding('utf8');

readStream.on('data', (chunck)=>{
	readableData += chunck;
});

readStream.on('end', ()=>{
	console.log(readableData);
});

readStream.on('error', (err)=>{
	console.log(err);
});