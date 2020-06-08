const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexRouter = require('./routes/index');
const movieRouter = require('./routes/movies');
const showingRouter = require('./routes/showing');
const screenRouter = require('./routes/screen');
const theaterRouter = require('./routes/theaters');


const helmet = require('helmet');
const compression = require('compression');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const{body, check} = require('express-validator');

const app = express();

app.use(compression());
app.use(helmet());

// uses CORS on URL if isProduction is true.
const isProduction = process.env.NODE_ENV === 'production';
const origin = {
  origin: isProduction ? 'https://final-project.herokuapp.com' : '*',
};
app.use(cors(origin));

// limits a client to 25 requests per minute.
const limiter = rateLimit({
  windowMs: 1*60*1000,
  max: 25,
});
app.use(limiter);

app.use(logger('dev'));
app.use(bodyParser.json());
// configure the app to use bodyParser()
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../dist')))

app.use(cookieParser());

app.use('/theaters', theaterRouter);
app.use('/movies', movieRouter);
app.use('/showings', showingRouter);
app.use('/screens', screenRouter);
app.use('*', indexRouter);

module.exports = app;