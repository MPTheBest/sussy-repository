var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("SIUUUU");
  res.end();
}).listen(3030);

var num = 1;
console.log(`variable: ${num}`);
console.log(`the server started; https://localhost:3030`);