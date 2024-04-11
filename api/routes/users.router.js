const express = require('express');
const UsersService = require('./../services/users.service');

const router = express.Router();
const service = new UsersService();

router.get('/', async (req, res, next) => {
  try {
    const users = await service.find();
    res.status(200).json({ users });
  } catch (error) {
    next(error);
  }
});

module.exports = router;