const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');

const helmet = require('helmet');
const compression = require('compression');
const morgan = require('morgan');

// Controllers
const { globalErrorHandler } = require('./controllers/errors.controller');

//Routers to endpoints
const { usersRouter } = require('./routes/users.routes');
const { ubigeoRouter } = require('./routes/ubigeo.routes');
const { categoryRouter } = require('./routes/category.routes');
const { branchRouter } = require('./routes/branch.routes');
const { shippingRouter } = require('./routes/shipping.routes');

const { db } = require('./utils/database');

//Init express app
const app = express();

// Enable CORS
app.use(cors());

//Enable incoming JSON data
app.use(express.json());

//add security helmet
app.use(helmet());

//compress responses
app.use(compression());
//log incoming request
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
} else {
  app.use(morgan('combined'));
}

// Limit IP requests
const limiter = rateLimit({
  max: 10000,
  windowMs: 1 * 60 * 60 * 1000, // 1 hr
  message: 'Too many requests from this IP',
});

app.use(limiter);

//  Endpoints & routers
app.use('/api/v1/users', usersRouter);
app.use('/api/v1/ubigeo', ubigeoRouter);
app.use('/api/v1/category', categoryRouter);
app.use('/api/v1/branch', branchRouter);
app.use('/api/v1/shipping', shippingRouter);

// Global error handler
app.use('*', globalErrorHandler);

module.exports = { app };
