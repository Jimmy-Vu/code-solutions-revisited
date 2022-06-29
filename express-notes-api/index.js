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

app.get('/api/notes/:id', (req, res) => {
  const id = parseInt(req.params.id, 10);
  if (Number.isInteger(id) === false || id < 1) {
    res.status(400).json({ error: "id must be a positive integer" })
  };

  if (!(Object.keys(data.notes).includes(req.params.id))) {
    res.status(404).json({ error: `cannot find any notes with the id of ${id}` })
  }

  for (let note in data.notes) {
    if (data.notes[note].id === id) {
      res.status(200).json(data.notes[note]);
      break;
    }
  }
});
