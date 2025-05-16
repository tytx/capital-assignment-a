const express = require('express');
const router = express.Router();
const portfolioController = require('../controller/portfolioController');

router.get('/:id', portfolioController.getPortfolioById);

router.get('/user/:userid', portfolioController.getPortfoliosByUserId);

module.exports = router;