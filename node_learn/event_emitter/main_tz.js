const fileStream = require('./filestream');
const fileRead = new fileStream()
fileRead.readFile('mockFile.txt');
fileRead.writeFile('mockFile1.txt', 'text text my text', (response) => console.log(response));