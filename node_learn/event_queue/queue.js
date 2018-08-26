const fs = require('fs');

fs.open(__filename, 'r', (err, file) => {
	console.log(file, 'f');
});

setImmediate(()=>{
	console.log('after I/O operation, on next libUI iteration')
})


process.nextTick(()=>{
	console.log('before I/O operation, after add all event listener');
})

