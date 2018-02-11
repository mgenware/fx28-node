const fx28 = require('..');

const bytes = Buffer.from('abcd', 'utf8');
console.log('original bytes: ', bytes);

const base64Encoded = bytes.toString('base64');
const fx28Encoded = fx28.encode(bytes);
console.log('base64 encoded: ', base64Encoded);
console.log('fx28 encoded: ', fx28Encoded);

console.log('base64 decoded: ', Buffer.from(base64Encoded, 'base64'));
console.log('fx28 decoded: ', fx28.decode(fx28Encoded));