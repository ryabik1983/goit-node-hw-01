const os = require('os')
const path = require('path')
// console.log(os.cpus().length);

// console.log(path.resolve('/foo/bar', './baz'));
// // Returns: '/foo/bar/baz'
// console.log(path.resolve('/foo/bar', '/tmp/file/'));
// // Returns: '/tmp/file'
// console.log(path.resolve('wwwroot', 'static_files/png/', '../gif/image.gif'));
// // If the current working directory is /home/myself/node,
// // this returns '/home/myself/node/wwwroot/static_files/gif/image.gif'
// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'));
// // Returns: '/foo/bar/baz/asdf'
// console.log(path.join(__dirname, 'foo', 'bar'));
// // Throws 'TypeError: Path must be a string. Received {}'
// console.log(path.sep);

// console.log(__filename);
process.on('exit', (code) => { 
    console.log(`Error: ${code}`);
})
console.log(process.pid);
process.exit(1001)

// console.log(__dirname);
// console.log(process.cwd());