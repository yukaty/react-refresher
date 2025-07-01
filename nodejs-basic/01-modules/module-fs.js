const fs = require('fs');

const message = "This is a test message for the file system module.";

fs.writeFile('test.txt', message, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
    console.log('File written successfully!');

    // Read the file after writing to it
    // This is a callback function that will be executed after the file is written
    fs.readFile('test.txt', 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('File contents:\n', data);
    });
});