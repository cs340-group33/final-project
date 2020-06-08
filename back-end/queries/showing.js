require('dotenv').config();
const { pool } = require('../config');

async function findAll() {
  const query = 'SELECT t.theater_name, ts.screen_id, start_time, showing_id, title ' +
    'FROM theater as t ' +
    'left join screen as ts on t.theater_id = ts.theater_id ' +
    'left join showing as tsh on ts.screen_id = tsh.screen_id ' +
    'left join movie as tshm on tsh.movie_id = tshm.movie_id ' +
    'WHERE showing_id IS NOT NULL';
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