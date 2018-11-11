const express = require('express');
const pg = require('pg');
const router = express.Router(); //dont forget module.exports = router

const conString = process.env.DATABASE_URL;

//@route    GET api/emails/test
router.get('/test', (req, res) => {
  res.json({
    message: 'Works !!!'
  });
});

//route     GET api/emails/all
router.get('/all', (req, res) => {
  const client = new pg.Client(conString);
  client
    .connect()
    .then(() => {
      return client.query(`SELECT * FROM participants;`);
    })
    .then(results => {
      console.log(results);
      res.json(results.rows);
    })
    .catch(err => res.json(err));
});

//@route    POST api/emails/add
router.post('/add', (req, res) => {
  const client = new pg.Client(conString);
  console.log('post body', req.body);
  client
    .connect()
    .then(() => {
      console.log('connection completed !');
      //insert data
      const sql = `INSERT INTO participants (first_name, last_name, email, comment) VALUES ($1, $2, $3, $4)`;
      const params = [
        req.body.firstname,
        req.body.lastname,
        req.body.email,
        req.body.comment
      ];
      return client.query(sql, params);
    })
    .then(result => {
      console.log(result);
      return res.json({ message: 'added !' });
    })
    .catch(err => {
      console.log(err);
    });
});

//route     DELETE api/emails/id
router.delete('/:id', (req, res) => {
  const client = new pg.Client(conString);
  console.log(req.params.id);
  client
    .connect()
    .then(() => {
      const sql = `DELETE FROM participants WHERE participant_id = ${
        req.params.id
      }`;
      return client.query(sql);
    })
    .then(result => {
      res.json({ message: 'deleted!' });
    })
    .catch(err => console.log(err));
});

module.exports = router;
