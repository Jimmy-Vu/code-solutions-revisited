const fs = require('fs');

const file1 = process.argv[2];
const file2 = process.argv[3];

fs.readFile(`${file1}`, 'utf8', (err, data) => {
  if (err) { throw err };
  fs.writeFile(`${file2}`, data, err => {
    if (err) { throw err };
    console.log(`Text from ${file1} has been copied to ${file2} successfully.`);
  });
});
