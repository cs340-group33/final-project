require('dotenv').config();
const { pool } = require('../config');

async function findAll() {
  const query = 'SELECT movie_id, title FROM movie';
  try {
    let movies = await pool.query( query );
    return movies;
  } catch (e) {
    throw (e);
  }
}

async function findNotShowing(){
  const query = 'SELECT movie_id, title FROM movie WHERE movie_id'+
                ' NOT IN (SELECT sm.movie_id FROM showing AS s '+
                'LEFT JOIN movie AS sm ON s.movie_id = sm.movie_id)';
  try {
    let unused = await pool.query( query );
    return unused;
  } catch (e) {
    throw new Error(e);
  }
}

//TODO Parse this so it is only title before it gets passed to addO()
async function addOne(movieInfo) {
  const query = 'INSERT INTO movie (title) VALUES ($1) ON CONFLICT DO NOTHING';
  const { title } = movieInfo;
  try {
    await pool.query( query , [title] );
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

async function search(movieInfo) {
  const query = 'SELECT movie_id, title FROM movie ' +
                'WHERE title LIKE %' + search + '%';
  const { title } = movieInfo;
  console.log(search);
  try {
    let movies = await pool.query( query, [title] );
    return movies;
  } catch (e) {
    throw new Error(e);
  }
}



async function deleteOne(movieID) {
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
  findNotShowing,
  search,
};