const FileReader = require('./readFile');
const reader = new FileReader();
reader.readDataFromFile('mockFile.txt', (response) => {
	console.log(response);
})