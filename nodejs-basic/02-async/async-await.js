const fs = require('fs/promises');

async function readFiles() {
  try {
    console.log('async1: Starting read');
    const data1 = await fs.readFile('./02-async/async1.txt', 'utf8');
    console.log('async1: ', data1);

    console.log('async2: Starting read');
    const data2 = await fs.readFile('./02-async/async2.txt', 'utf8');
    console.log('async2: ', data2);

    console.log('async3: Starting read');
    const data3 = await fs.readFile('./02-async/async3.txt', 'utf8');
    console.log('async3: ', data3);
  } catch (err) {
    console.error('Error: ', err);
  }
}

// Call the async function
readFiles();
// This will run immediately while the async function is still executing
console.error('Going on without waiting for file read...');
console.error('Doing other stuff...');

