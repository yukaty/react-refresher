const fs = require('fs/promises');

console.log('async1: Starting read');
fs.readFile('./02-async/async1.txt', 'utf8')
  .then(data1 => {
    console.log('async1: ', data1);

    console.log('async2: Starting read');
    return fs.readFile('./02-async/async2.txt', 'utf8');
  })
  .then(data2 => {
    console.log('async2: ', data2);
の内容：
    console.log('async3: Starting read');
    return fs.readFile('./02-async/async3.txt', 'utf8');
  })
  .then(data3 => {
    console.log('async3: ', data3);
  })
  .catch(err => {
    console.error('Error:', err);
  });

// This will run immediately while the async function is still executing
console.error('Going on without waiting for file read...');
console.error('Doing other stuff...');
