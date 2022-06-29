const express = require('express');
const app = express();
const data = require('./data.json');

app.listen(3000, () => {
  console.log('Listening on port 3000.');
});

app.get('/api/notes', (req, res) => {
  const dataArray = [];
  for (let note in data.notes) {
    dataArray.push(data.notes[note]);
  }
  res.status(200).json(dataArray);
});
