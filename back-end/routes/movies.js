require('dotenv').config();
const express = require('express');
const router = express.Router();

const Movies = require('../queries/movie');


router.get('/', async (req, res) => {
  try {
    let response = await Movies.findAll();

    res.status(200).json(response.rows);
  } catch (e) {
    res.sendStatus(500);
  }
});


//gets movies that are not showing
router.get('/notshowing', async (req, res) => {
  try {
    let response = await Movies.findNotShowing();

    res.status(200).json(response.rows);
  } catch (e) {
    res.sendStatus(500);
  }
});

//Add one movie
router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    await Movies.addOne(req.body);

    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});

//Search for movie
router.post('/search', async (req, res) => {
  console.log(req.body);
  try {
    await Movies.search(req.body);

    res.sendStatus(200);
  } catch (e) {
    res.sendStatus(500);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    await Movies.deleteOne(req.params.id);

    res.sendStatus(200);
  } catch (e) {

    res.sendStatus(500);
  }
});

module.exports = router;
