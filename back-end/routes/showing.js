require('dotenv').config();

const express = require('express');
const router = express.Router();


const Showing = require('../queries/showing');


router.get('/', async (req, res) => {
  try {
    let response = await Showing.findAll();

    res.status(200).json(response.rows);
  } catch (e) {
    res.status(500);
  }
});


module.exports = router;