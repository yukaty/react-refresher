const fs = require('fs');

// Read file asynchronously
console.log('Reading file asynchronously...');
fs.readFile('hello.js', 'utf8', (err, data) => {
  if (err) {
    console.error('Error', err);
    return;
  }

  // File read successfully
  console.log('File read successfully!');
  console.log('File contents:');
  console.log(data);
});

// Go on without waiting for file read
console.log('Going on without waiting for file read...');
console.log('Doing other stuff...');


