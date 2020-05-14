// helper functions to query db and return standardized API responses
const { pool } = require('../config');
const { returnErrorWithMessage, returnGeneralError} = require('./response-helpers');

function makeDbQueryAndReturnResults(queryString, res) {
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

async function getRowFromDb(queryString) {
  let results;
  try {
    results = await pool.query(queryString)
  } catch (e) {
    throw e
  }
  return results.rows[0];
};

module.exports = {
   makeDbQueryAndReturnResults,
   getRowFromDb,
}