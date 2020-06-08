require('dotenv').config();

const express = require('express');
const router = express.Router();


const Screen = require('../queries/screen');


router.get('/', async (req, res) => {
  try {
    let response = await Screen.findAll();

    res.status(200).json(response.rows);
  } catch (e) {
    res.status(500);
  }
});


module.exports = router;