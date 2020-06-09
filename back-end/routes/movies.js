/*
* Movies API Page that directs asynchronous queries
*/
require('dotenv').config();
const express = require('express');
const router = express.Router();
const Movies = require('../queries/movie');

/* Basic GET route that will get all data. This is used to display tables*/
router.get('/', async (req, res) => {
  try {
    let response = await Movies.findAll();

    res.status(200).json(response.rows);
  } catch (e) {
    res.status(500);
  }
});


/* basic GET route that gets all movies that don't currently have a showing*/
router.get('/notshowing', async (req, res) => {
  try {
    let response = await Movies.findNotShowing();

    res.status(200).json(response.rows);
  } catch (e) {
    res.status(500);
  }
});

/* Basic POST route used to add one item*/
router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    await Movies.addOne(req.body);

    res.status(200);
  } catch (e) {
    res.status(500);
  }
});

/* Basic POST route used to search for the body in the Movie's database by title*/
router.post('/search', async (req, res) => {
  console.log(req.body);
  try {
    let response = await Movies.search(req.body);

    res.status(200).json(response.rows);
  } catch (e) {
    res.status(500);
  }
});

/* Basic DELETE route used to delete one item with the specified id*/
router.delete('/:id', async (req, res) => {
  try {
    await Movies.deleteOne(req.params.id);

    res.status(200);
  } catch (e) {

    res.status(500);
  }
});

module.exports = router;
