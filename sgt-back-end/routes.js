const express = require('express');
const index = require('./index');
const router = express.Router();
const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://postgres:postgres@localhost/studentGradeTable'
});

router.get('/api/grades', (req, res) => {
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
router.use(middleware);

router.post('/api/grades', (req, res) => {
  const entry = req.body;
  const values = [entry.name, entry.course, entry.score];
  const scoreInt = Number.parseInt(entry.score, 10);

  if ((scoreInt < 0 || scoreInt > 100) || !Number.isInteger(scoreInt)) {
    res.status(400).json({ error: 'Please enter a postive integer from 0 to 100 for the score.' });
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

  db.query(sql, values)
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

router.put('/api/grades/:gradeId', (req, res) => {
  const idInt = Number.parseInt(req.params.gradeId, 10);

  if (!Number.isInteger(idInt) || idInt < 1) {
    res.status(400).json({ error: 'Please enter a postive integer for the grade ID.' });
    return;
  }
  const entry = req.body;
  const values = [entry.name, entry.course, entry.score, idInt];
  const scoreInt = Number.parseInt(entry.score, 10);

  if ((scoreInt < 0 || scoreInt > 100) || !Number.isInteger(scoreInt)) {
    res.status(400).json({ error: 'Please enter a postive integer from 0 to 100 for the score.' });
    return;
  } else if (!entry.name || !entry.course) {
    res.status(400).json({ error: 'Please make sure that the name and course are included.' });
    return;
  }

  const sql = `
    update "grades"
      set "name" = $1,
          "course" = $2,
          "score" = $3
      where "gradeId" = $4
      returning *;
    `;

  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (grade === undefined) {
        res.status(404).json({ error: 'The supplied gradeId does not exist.' });
      } else {
        res.status(200).json(grade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error has occurred.'
      });
    });
})

router.delete('/api/grades/:gradeId', (req, res) => {
  const idInt = Number.parseInt(req.params.gradeId, 10);

  if (!Number.isInteger(idInt) || idInt < 1) {
    res.status(400).json({ error: 'Please enter a postive integer for the grade ID.' });
    return;
  }

  const values = [idInt];
  const sql = `
    delete from "grades"
      where "gradeId" = $1
      returning *;
    `;

  db.query(sql, values)
    .then(result => {
      const grade = result.rows[0];
      if (grade === undefined) {
        res.status(404).json({ error: 'The supplied gradeId does not exist.' });
      } else {
        res.status(204).json(grade);
      };
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({
        error: 'An unexpected error has occurred.'
      });
    });
})

module.exports = router;
