const fs = require('fs');

fs.writeFile('mynewfile3.txt', 'This is my Nodejs application develop through general materials online', function (err) {
  if (err) throw err;
  console.log('Replaced!');
});