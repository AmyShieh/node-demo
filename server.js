const http = require('http');

const port = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' })
  const myInfo = {
    name: 'amy',
    age: 24
  }
  res.end(`hey, amy! how\'s going on? ${JSON.stringify(myInfo)}`)
})

server.listen(port, '127.0.0.1');
console.log("serve is listening the port of 3000!");