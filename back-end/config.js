// Adapted from https://www.taniarascia.com/node-express-postgresql-heroku/

require('dotenv').config()

const { Pool } = require('pg')
//const util = require('util');
const isProduction = process.env.NODE_ENV === 'production'

const connectionString = `postgresql://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_DATABASE}`

const sslRejectFalse = { rejectUnauthorized: false }
const sslSetting = isProduction ? sslRejectFalse : false

const pool = new Pool({
  connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
  ssl: sslSetting,
})

//pool.query = util.promisify(pool.query);

module.exports = { pool }