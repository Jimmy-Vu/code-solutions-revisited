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
  res.json(params);
})
