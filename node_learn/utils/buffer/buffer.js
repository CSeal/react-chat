const buf1 = Buffer.alloc(15);
console.log('Empty buffer ', buf1);
const notInitBuff = Buffer.allocUnsafe(15);
console.log('not initialise buffer ', notInitBuff);
console.log('buff1 length ' + buf1.length);

const arr1 = new Uint16Array(15);
const arr2 = new Uint16Array(4);
const buff1 = Buffer.from(arr1.buffer);
const buff2 = Buffer.from(arr2.buffer);
buff1.write('1247B', 0, 12);
buff2.write('1234', 0, 3);
const buff1Str = buff1.toString('utf-8', 0, 12);
const buff2Str = buff2.toString('utf-8', 0, 4);
console.log(buff1Str);
console.log(buff2Str);
const concatBuff = Buffer.concat([buff1, buff2], 32);
console.log(concatBuff.toString('utf-8', 0, 32));