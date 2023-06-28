const fs = require('fs');
fs.appendFile('newFile.txt', 'Welcome to this platform to this app!!', function (err) {
  if (err) throw err;
  console.log('Saved!');
});