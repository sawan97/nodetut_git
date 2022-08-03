const fs = require('fs');
// const { readFileSync, writeFileSync} = require('fs');


const first = fs.readFileSync('./contents/first.txt', 'utf8');
const second = fs.readFileSync('./contents/second.txt', 'utf8');

// console.log(first, second);
fs.writeFileSync('./contents/result-sync.txt',`Result: ${first, second}`,{flag:'a'});
