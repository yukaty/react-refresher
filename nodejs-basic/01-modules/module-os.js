const os = require('os');

console.log('Operating System Information:');
console.log('OS Type:', os.type());
console.log('OS Platform:', os.platform());
console.log('OS Release:', os.release());
console.log('OS Architecture:', os.arch());
console.log('OS CPU Count:', os.cpus().length);
console.log('OS Free Memory:', os.freemem());
console.log('OS Total Memory:', os.totalmem());
console.log('OS Home Directory:', os.homedir());
console.log('OS User Info:', os.userInfo());
console.log('OS Hostname:', os.hostname());