const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

module.exports = ({ userRouter, charactersRouter }) => {
  const app = express();
  // view engine setup
  app.set('views', path.join(__dirname, './views'));
  app.set('view engine', 'jade');

  app.use(
    cors({
      origin: [`${process.env.FRONT_URL}`, 'http://localhost:3000'],
      credentials: true,
    })
  );
  app.use(logger('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use(cookieParser());

  //app.use('/', indexRouter);
  app.use('/users', userRouter);
  app.use('/characters', charactersRouter);

  // catch 404 and forward to error handler
  app.use(function (req, res, next) {
    next(createError(404));
  });

  // error handler
  app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
  });

  return app;
};
