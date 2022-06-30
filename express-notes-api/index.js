const express = require('express');
const app = express();
const fs = require('fs');
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

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.post('/api/notes', (req, res) => {
  const body = req.body;
  const currentId = data.nextId;
  if (!(Object.keys(body).includes('content'))) {
    res.status(400).json({ error: "content is a required field" });
  }

  data.notes[data.nextId] = {
    id: currentId,
    content: body.content
  };
  data.nextId++;

  fs.writeFile('data.json', JSON.stringify(data, null, 2), (err) => {
    if (err) { res.status(500).json({ error: "An unexpected error has occurred." }); }
    else {
      res.status(201).json({
        id: currentId,
        content: body.content
      })
    }
  })

});
