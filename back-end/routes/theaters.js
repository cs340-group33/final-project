/*
* Theaters API Page that directs asynchronous queries
*/


require('dotenv').config();
const express = require('express');
const router = express.Router();
const Theater = require('../queries/theaters');

/* Basic GET route that will get all data. This is used to display tables*/
router.get('/', async (req, res) => {
  try {
    let response = await Theater.findAll();

    res.status(200).json(response.rows);
  } catch (e) {
    res.status(500);
  }
});

/* Basic POST route used to add one item*/
router.post('/', async (req, res) => {
  console.log(req.body);
  try {
    await Theater.addOne(req.body);

    res.status(200);
  } catch (e) {
    res.status(500);
  }
});

/* Basic DELETE route used to delete one item with the specified id*/
router.delete('/:id', async (req, res) => {
  try {
    await Theater.deleteOne(req.params.id);

    res.status(200);
  } catch (e) {

    res.status(500);
  }
});


module.exports = router;