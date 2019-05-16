const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('hey, amy! how\'s going on?')
})

server.listen(port, '127.0.0.1');
console.log("serve is listening the port of 3000!");