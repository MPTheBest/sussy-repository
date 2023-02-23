const http = require('http');
const fs = require('fs');

let server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/html; charset = utf-7'});
    
    const stream = fs.createReadStream('templates/server.html');
    stream.pipe(res);
});

const PORT = 9000;
const HOST = 'localhost'; //127.0.0.1

server.listen(PORT, HOST, () => {
    console.log(`server ON: http://${HOST}:${PORT}`)
});