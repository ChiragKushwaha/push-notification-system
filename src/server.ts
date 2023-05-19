// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import express, { Request, Response } from 'express';
import createError from 'http-errors';
import { PORT_ENV } from './constants/env';
import healthCheckHandler from './express-routes/health-check-handler';
import corsOptions from './middlewares/cors-options';
import initializeLogger from './middlewares/logger';
import notificationRouter from './routers/notification-router';

process.env.TZ = 'Asia/Calcutta';

const app = express();

initializeLogger(app);

app.use(express.urlencoded({ extended: false }));
app.use(express.text({ defaultCharset: 'utf-8', type: 'text/plain' }));
app.use(express.json());
app.use(cookieParser());
app.use(compression());
app.use(cors(corsOptions));

app.get('/favicon.ico', (req, res) => {
  res.status(204).end();
});

// health check
app.get('/health-check', healthCheckHandler);

app.use('/notfication', notificationRouter);

app.use(express.static('public'));

// app.use(loginCheck);

// router that needs login add here

app.use(function (req, res, next) {
  next(createError(404, 'The Requested Route Does Not Exist'));
});

// error handler
app.use(function (err: createError.HttpError, req: Request, res: Response) {
  if (!res.headersSent) {
    res.status(err.status || 500).json({ success: false, error: err.message });
  }
});

app.listen(PORT_ENV, () =>
  console.log(`Your server is listening at http://localhost:${PORT_ENV}`)
);

process
  .on('uncaughtException', (err) => {
    console.log('UNCAUGHT EXCEPTION =====> ', err);
  })
  .on('unhandledRejection', (reason, p) => {
    console.log('Unhandled Promise Rejection', p, 'reason:', reason);
  });
