const fs = require('fs');

function create(newNote) {
  fs.readFile('data.json', (err, data) => {
    if (err) throw err;
    parsedData = JSON.parse(data);
    console.log(`Your note has been added with the ID of ${parsedData.nextId}`);
    parsedData.notes[parsedData.nextId] = newNote;
    parsedData.nextId++;
    data = JSON.stringify(parsedData, null, 2);
    fs.writeFile('data.json', data, err => {
      if (err) throw err;
    })
  })
}

module.exports = create;
