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

async function addOne(theaterInfo) {
  const query = 'INSERT INTO theater (theater_name, street, city, zip) VALUES ($1, $2, $3, $4) ON CONFLICT DO NOTHING';
  const { theater_name, street, city, zip } = theaterInfo;
  console.log(zip);
  try {
    await pool.query( query , [theater_name, street, city, zip] );
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

async function deleteOne(theater_ID) {
  try {
    await pool.query(
      'DELETE FROM theater WHERE theater_ID = $1',
      [theater_ID]
    );
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = {
  deleteOne,
  addOne,
  findAll
};