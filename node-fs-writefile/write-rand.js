const fs = require('fs');

const data = Math.random().toString();
fs.writeFile('random.txt', data, (err) => {
  if (err) { throw err };
  console.log('A random number has been written to random.txt:', data);
})
