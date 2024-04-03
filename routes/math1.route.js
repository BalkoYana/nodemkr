const express = require('express');
const router = express.Router();

const controller = require('../controllers/math.controller');
const middleware = require('../middlewares/math.middleware');

router.route('/')
    .post(middleware.secondValidation, controller.createSecond2, controller.createSecond);

module.exports = router;