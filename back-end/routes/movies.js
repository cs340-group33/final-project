require('dotenv').config();

var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');
const {check, validationResult} = require('express-validator');

const { makeDbQueryAndReturnResults, getRowFromDb } = require('../helpers/db-helpers')
const { returnGeneralError, returnErrorWithMessage } = require('../helpers/response-helpers')



/* GET movies */
router.get('*', async function(req, res, next) {
  // verify user has permission to get this data
  const getUserQuery = 'SELECT movie_ID, title, created_at FROM movie' ;
  makeDbQueryAndReturnResults(getUserQuery, res);
});


module.exports = router;
