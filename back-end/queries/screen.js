/*
* Queries Page for Screens
*/


require('dotenv').config();
const { pool } = require('../config');


// Finds all Screens
async function findAll() {
  const query = 'SELECT t.theater_name, ts.screen_ID, seats ' +
                'FROM theater as t ' +
                'LEFT JOIN screen as ts on t.theater_id = ts.theater_id';
  try {
    let showings = await pool.query( query );
    return showings;
  } catch (e) {
    throw (e);
  }
}

module.exports = {
  findAll
};