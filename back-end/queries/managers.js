require('dotenv').config();
const { pool } = require('../config');

async function findAll() {
  const query = 'SELECT manager_ID, first_name, last_name FROM manager';
  try {
    let managers = await pool.query( query );
    return managers;
  } catch (e) {
    throw (e);
  }
}


async function addOne(managerInfo) {
  const query = 'INSERT INTO manager (first_name, last_name) VALUES ($1, $2) ON CONFLICT DO NOTHING';
  const { first_name, last_name } = managerInfo;

  try {
    await pool.query( query , [first_name, last_name] );
  } catch (e) {
    console.log(e);
    throw new Error(e);
  }
}

async function deleteOne(manager_ID) {
  try {
    return await pool.query(
      'DELETE FROM manager WHERE manager_ID = $1',
      [manager_ID]
    );
  } catch (e) {
    throw new Error(e);
  }
}

module.exports = {
  addOne,
  deleteOne,
  findAll
};