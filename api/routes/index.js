const express = require('express');
const financialsRouter = require('./financialMovements.router');
const categoriesRouter = require('./categories.router');
const eventTypesRouter = require('./eventTypes.router');

function routerApi(app) {
  const router = express.Router();
  app.use('/api/v1', router);
  router.use('/financials', financialsRouter);
  router.use('/categories', categoriesRouter);
  router.use('/event-types', eventTypesRouter);
}

module.exports = routerApi;
