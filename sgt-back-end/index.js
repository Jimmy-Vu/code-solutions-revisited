const express = require('express');
const pg = require('pg');

const app = express();
app.listen(3000, () => {
  console.log('Listening on port 3000');
})

const db = new pg.Pool({
  connectionString: 'postgres://postgres:postgres@localhost/studentGradeTable'
});

app.get('/api/grades', (req, res) => {
  const sql = `
    select "gradeId",
            "name",
            "course",
            "score",
            "createdAt"
    from "grades"`;

  db.query(sql)
    .then(result => {
      const grade = result.rows;
      res.status(200).json(grade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error has occurred.'
      });
    });
})

const middleware = express.json();
app.use(middleware);

app.post('/api/grades', (req, res) => {
  const entry = req.body;
  const params = [entry.name, entry.course, entry.score];
  const scoreInt = Number.parseInt(entry.score, 10);

  if ((scoreInt < 0 || scoreInt > 100) || !Number.isInteger(scoreInt)) {
    res.status(400).json({error: 'Please enter a postive integer from 0 to 100 for the score.'});
    return;
  } else if (!entry.name || !entry.course) {
    res.status(400).json({ error: 'Please make sure that the name and course are included.' });
    return;
  }



  const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *;
  `;

  db.query(sql, params)
    .then(result => {
      const grade = result.rows[0];
      res.status(201).json(grade);
    })
    .catch(err => {
      res.status(500).json({
        error: 'An unexpected error has occurred.'
      });
    });
})
