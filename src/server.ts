/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */

import * as express from 'express';

interface Err extends Error {
  status: number;
  data?: Record<string, any>;
}

const app = express();
app.use('/', require('./router'));
const debug = require('debug')('ts-express:app');

// catch 404 and forward to error handler
const notFoundHandler = (
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  const err = new Error('Not Found') as Err;
  err.status = 404;
  next(err);
};

app.use(notFoundHandler);

// error handler
const errorHandler = (
  err: Err,
  req: express.Request,
  res: express.Response,
  next: express.NextFunction
) => {
  debug(err);

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json({
    message: err.message,
    data: err.data
  });
};

app.use(errorHandler);

app.use('/', require('./router'));

console.log(`Server Running on PORT: ${process.env.PORT}`);
app.listen(process.env.PORT || 5000);
