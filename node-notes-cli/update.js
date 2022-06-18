const fs = require('fs');

function update(id, newNote) {
  fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    parsedData = JSON.parse(data);
    console.log(`The note with the ID of ${parsedData.nextId} has been updated.`);
    parsedData.notes[id] = newNote;
    data = JSON.stringify(parsedData, null, 2);
    fs.writeFile('data.json', data, err => {
      if (err) throw err;
    })
  })
}

module.exports = update;
