const createError = require('http-errors');
const ObjectId = require('mongoose').Types.ObjectId;
const apartmentService = require('../services/math.service');
const { FirstCreateSchema } = require('../validation_schemas/math.schemas');
const { SecondCreateSchema } = require('../validation_schemas/math1.schemas');