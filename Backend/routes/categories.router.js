const express = require('express');
const CategoriesService = require('./../services/categories.service');

const router = express.Router();
const service = new CategoriesService();

router.get('/', async (req, res) => {
  res.send('categories endpoint');
});

module.exports = router;
