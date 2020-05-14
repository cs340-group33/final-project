require('dotenv').config();
const { pool } = require('../config');

async function findAll() {
  try {
    let movies = await pool.query(
      'SELECT movie_id, title FROM movie'
    );

    return movies;
  } catch (e) {
    throw new Error(e);
  }
}


async function addOne(movieInfo) {
  const { title } = movieInfo;
  try {
    await pool.query(
      'INSERT INTO movie (title) ' +
      'VALUES ($1)',
      [title]
    );
  } catch (e) {
    throw new Error(e);
  }
}

async function deleteOne(movieID) {
  console.log(movieID);
  try {
    await pool.query(
      'DELETE FROM movie WHERE movie_id = $1',
      [movieID]
    );
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = {
  findAll,
  addOne,
  deleteOne,
};