let staticserver = require('static-server');
let server = new staticserver({
    rootPath: './dist',
    port: 8000
})
server.start (function() {
    console.log('hello'+server.port);
})