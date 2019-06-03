const http = require('http');
const fs = require('fs');

const readStream = (file) => fs.createReadStream(`${__dirname}/${file}.html`, 'utf8')

http.createServer((req, res) => {
  console.log(req.url);
  const route = req.url;
  if(route === '/' || route === '/home') {
    res.writeHeader(200, {
      'Content-Type': 'text/html'
    });
    readStream('index').pipe(res)
  } else if (route === '/api') {
    res.writeHeader(200, {
      'Content-Type': 'application/json'
    });
    res.end(JSON.stringify({ name: 'amy', age: '24'}))
  } else {
    res.writeHeader(404, {
      'Content-Type': 'text/html'
    });
    readStream('404').pipe(res)
  }
}).listen(3000, 'localhost')