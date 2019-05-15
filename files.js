const fs = require('fs');

// create a direction
fs.mkdir('createAFile', function () {
  console.log('create file done');
  // read a file
  fs.readFile('app.js', 'utf8', function (err, data) {
    console.log("The data from the app");
    console.log('-------------------------------');
  })

  const readFileSync = fs.readFileSync('./main.js', 'utf8');
  console.log('-------------------------------');
  // write a file
  fs.writeFile('./createAFile/writeFile.js', readFileSync, function () {
    console.log("Write file done!");
    console.log('-------------------------------');
    // delete a file
    fs.unlink('./createAFile/writeFile.js', function () {
      console.log("delete file done!");
      console.log('-------------------------------');
      // delete a direction
      fs.rmdir('createAFile', function () {
        console.log("delete direction done!");
        console.log('-------------------------------');
      })
    })
  });
})
