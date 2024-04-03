const createError = require('http-errors');

const { FirstCreateSchema } = require('../validation_schemas/math.schemas');
const { SecondCreateSchema } = require('../validation_schemas/math1.schemas');
async function firstValidation(req, res, next) {
    try {
        const { x, y } = req.body;
        for (const element of [...x, ...y]) {
            if (!Number.isFinite(element)) {
                throw createError.BadRequest('x та y повинні бути скінченними числами');
            }
        }
        if (x.length !== 3 || y.length !== 3) {
            return createError.BadRequest('x та y мають містити рівно три елементи для вектора в R^3');
        }
        if (!Array.isArray(x) || !Array.isArray(y)) {
            return createError.BadRequest('x та y мають бути масивами');
        }
        const { error } = FirstCreateSchema.validate(req.body);



        if (error) {
            throw createError.BadRequest(error.details[0].message);
        }
        next();
    } catch (err) {
        next(err);
    }
};
async function secondValidation(req, res, next) {
    try {
        const { x, n } = req.body;
        if (!Number.isInteger(n) || n <= 0) {
            return createError.BadRequest('n має бути натуральним числом');
        }
        if (!Number.isFinite(x)) {
            return createError.BadRequest('x неправильний ');
        }
        const { error } = SecondCreateSchema.validate(req.body);



        if (error) {
            throw createError.BadRequest(error.details[0].message);
        }
        next();
    } catch (err) {
        next(err);
    }
};
module.exports = { firstValidation, secondValidation }

