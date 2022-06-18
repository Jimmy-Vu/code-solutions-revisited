const fs = require('fs');

function remove(id) {
  fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    parsedData = JSON.parse(data);
    console.log(`Your note with the ID of ${id} has been deleted.`);
    delete parsedData.notes[id];
    data = JSON.stringify(parsedData, null, 2);
    fs.writeFile('data.json', data, err => {
      if (err) throw err;
    })
  })
}

module.exports = remove;
