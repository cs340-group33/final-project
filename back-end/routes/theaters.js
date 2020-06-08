require('dotenv').config();

const express = require('express');
const router = express.Router();


const Theater = require('../queries/theaters');


router.get('/', async (req, res) => {
  try {
    let response = await Theater.findAll();

    res.status(200).json(response.rows);
  } catch (e) {
    res.status(500);
  }
});


module.exports = router;