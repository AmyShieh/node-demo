const http = require("http");
const fs = require("fs");

const readStream = fs.createReadStream(__dirname+'/test.txt', 'utf8');
// const writeStream = fs.createWriteStream(__dirname+'/writeFile.txt');

http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-Type': 'text/plain',
  });
  readStream.pipe(res)
}).listen(3000, '127.0.0.1');

// readStream.on('data', function (chunk) {
//   console.log(chunk);
//   writeStream.write(chunk)
// })