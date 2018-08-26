const fs = require('fs');
console.log('FSLowlewel operation start');

fs.open('examp;e.txt', 'w+', (err, fileDescriptor) => {
	if (err) {
		return err;
	}
	
	fs.write(fileDescriptor, 'Text to write', {encoding: 'utf8'}, (err, writeBiteLength, writeStr) => {
		console.log('write File');
		if (err) {
			return err;
		}

		console.log('Byte count of write String ' + writeBiteLength);
		console.log('Write String ' + writeStr);
	})

	//Reading
	const arr = new Uint16Array(1024);
	const buffer = Buffer.from(arr.buffer);
	
	fs.read(fileDescriptor, buffer, 0, buffer.length, 0, (err, bytesRead) => {
		console.log('reading file');
		if (err) {
			return err;
		}

		console.log(bytesRead);

		const readStr = buffer.slice(0, bytesRead).toString('utf8');
		console.log(readStr);
	})
});