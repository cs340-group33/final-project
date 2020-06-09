/*
* Queries Page for Theater-Managers
*/


require('dotenv').config();
const { pool } = require('../config');

//Finds all Theater-Manager relationships
async function findAll() {
  const query = 'SELECT t.theater_name, trm.first_name, trm.last_name ' +
  'FROM theater as t ' +
  'left join manager_theater_relationship as tr on t.theater_id = tr.theater_id ' +
  'left join manager as trm on tr.manager_id = trm.manager_id ' +
  'order by t.theater_name';
  try {
    let tms = await pool.query( query );
    return tms;
  } catch (e) {
    throw (e);
  }
}



module.exports = {
  findAll
};