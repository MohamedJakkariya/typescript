/** @format */

const Buffer = require('buffer').Buffer;

console.time('buf');

const buf = Buffer.from('1ag', 'hex');

console.timeEnd('buf');

console.log(buf.toString('hex'));
