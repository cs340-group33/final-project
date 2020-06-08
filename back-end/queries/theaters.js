require('dotenv').config();
const { pool } = require('../config');

async function findAll() {
  const query = 'SELECT theater_id, theater_name, street, city, zip FROM theater';
  try {
    let theaters = await pool.query( query );
    return theaters;
  } catch (e) {
    throw (e);
  }
}

module.exports = {
  findAll
};