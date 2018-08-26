const path = require('path');
console.log(__filename);
//C:\react-project\react-chat\node_learn\utils\path\path.js
console.log(path.basename(__filename));
//path.js
console.log(path.extname(__filename));
//.js
console.log(path.resolve('./path.js'));
//C:\react-project\react-chat\node_learn\utils\path\path.js
const abs = path.isAbsolute(path.resolve('./path.js'));
console.log(path.resolve('./path.js') + ' isAbsolute = ' + abs);
//C:\react-project\react-chat\node_learn\utils\path\path.js isAbsolute = true
const notAbs = path.isAbsolute('./path.js');
console.log('./path.js isAbsolute = ' + notAbs);
//./path.js isAbsolute = false
const fileName = 'myFile.js';
const filePath = path.join(__dirname, fileName);
console.log(filePath);
//C:\react-project\react-chat\node_learn\utils\path\myFile.js
const fileParse = path.parse(filePath);
console.log(fileParse);
/*{ root: 'C:\\',
  dir: 'C:\\react-project\\react-chat\\node_learn\\utils\\path',
  base: 'myFile.js',
  ext: '.js',
  name: 'myFile' }*/
console.log('System seporator ' + path.sep);
//System seporator \
const fileFromObj = path.format(fileParse);
console.log(fileFromObj);
//C:\react-project\react-chat\node_learn\utils\path\myFile.js

console.log(process.arch);
//x64
console.log(process.argv);
/*[ 'C:\\Program Files\\nodejs\\node.exe',
  'C:\\react-project\\react-chat\\node_learn\\utils\\path\\path',
  'test,',
  '123' ]*/
console.log(process.execPath);
//C:\Program Files\nodejs\node.exe
console.log(process.version);
//v8.9.1
console.log(process.platform);
//win32
console.log(process.memoryUsage());
/*{ rss: 21266432,
  heapTotal: 7708672,
  heapUsed: 4543072,
  external: 8224 }*/