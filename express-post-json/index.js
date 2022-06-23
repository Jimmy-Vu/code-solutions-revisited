const express = require('express');
const app = express();

app.listen(3000, () => {
  console.log('Listening on port 3000');
});

let nextId = 1;
let grades = {};

app.get('/api/grades', (req, res) => {
  const gradesArray = [];
  for (let object in grades) {
    gradesArray.push(grades[object]);
  }
  console.log(grades);
  res.json(gradesArray);
});

const jsonMiddleware = express.json();
app.use(jsonMiddleware);

app.post('/api/grades', (req, res) => {
  grades[`${nextId}`] = req.body;
  grades[`${nextId}`].id = nextId;
  res.status(201).send(grades[`${nextId}`]);
  nextId++;
});
