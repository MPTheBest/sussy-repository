var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("SIUUUU");
  res.end();
}).listen(8080);

var num = 1;
console.log(`variable: ${num}`);
console.log(`the server started; https://localhost:3030`);

const fs = require('fs');

//egg counter
let result = fs.readFileSync('txt.txt', 'utf-8');
console.log(result);
fs.writeFileSync('txt.txt', result + 'egg\n');