const fs = require('fs');

fs.writeFile('mynewfile3.txt', "Learning how to update files", function (err) {
  if (err) throw err;
  console.log('Saved!');
});