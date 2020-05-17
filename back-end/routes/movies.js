require('dotenv').config();
const { pool } = require('../config');
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const {check, validationResult} = require('express-validator');

const Movies = require('../queries/movie');

/*

function returnGeneralError(res) {
  return res.status(500).send('An error occurred');
}
function returnErrorWithMessage(res, error) {
  return res.status(500).send('An error occurred');
}
function returnNotFound(res, error = 'Not Found') {
  return res.status(404).send(error);
}

async function getAllMovies(queryString, res) {
  pool.query(queryString, (error, results) => {
    if (error) {
      return returnErrorWithMessage(res, error);
    }
    else if (!results || !results.rows || results.rows[0] === undefined) {
      return returnGeneralError(res);
    }
    return res.status(200).send(results.rows);
  })
};


/!* GET movies *!/
router.get('*', async function(req, res, next) {
  const getUserQuery = 'SELECT movie_ID, title FROM movie' ;
  getAllMovies(getUserQuery, res);
});
*/


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
