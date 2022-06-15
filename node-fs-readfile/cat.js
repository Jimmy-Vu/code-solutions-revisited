const fs = require('fs');

let combinedText = '';

for (let i = 2; i < process.argv.length; i++) {
  fs.readFile(`./${process.argv[i]}`, 'utf8', (err, data) => {
    if (err) throw err;
    combinedText += data;
    if (i === process.argv.length - 1) {
      console.log(combinedText);
    }
  })
}
