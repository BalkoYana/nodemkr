const express = require('express');
const router = express.Router();

const controller = require('../controllers/math.controller');
const middleware = require('../middlewares/math.middleware');


router.route('/')
    .post(middleware.firstValidation, controller.createFirst, controller.createFirst1);

module.exports = router;
