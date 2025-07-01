const path = require('path');

// __dirname is the directory name of the current module
console.log('__dirname:', __dirname);
// __filename is the filename of the current module
console.log('__filename:', __filename);

// path.basename returns the last portion of a path
console.log('path.basename(__filename):', path.basename(__filename));
// path.dirname returns the directory name of a path
console.log('path.dirname(__filename):', path.dirname(__filename));
// path.extname returns the extension of the path
console.log('path.extname(__filename):', path.extname(__filename));

// path.join joins all given path segments together
const fullPath = path.join('/Users', 'john', 'Documents', 'file.txt');
console.log('path.join("/Users", "john", "Documents", "file.txt"):', fullPath);