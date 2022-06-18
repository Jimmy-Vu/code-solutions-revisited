const fs = require('fs');

function read() {
  fs.readFile('data.json', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
  });
}

module.exports = read;
