const express = require('express');
const expensesRouter = require('./expenses.router');
const categoriesRouter = require('./expenses.router');
const usersRouter = require('./users.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/expenses', expensesRouter);
  router.use('/categories', categoriesRouter);
  router.use('/users', usersRouter);
}

module.exports = routerApi;
