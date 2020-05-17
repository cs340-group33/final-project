const express = require('express');
const path = require('path');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const movieRouter = require('./routes/movies');

const app = express();




// uses CORS on URL if isProduction is true.
const isProduction = process.env.NODE_ENV === 'production';
const origin = {
  origin: isProduction ? 'https://final-project.herokuapp.com' : '*',
};
app.use(cors(origin));


const limiter = rateLimit({
  windowMs: 1*60*1000,
  max: 25,
});
app.use(limiter);

// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, '../dist')))



app.use('/movies', movieRouter);
app.use('*', indexRouter);

module.exports = app;