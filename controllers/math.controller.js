const mathService = require('../services/math.service');
const createError = require('http-errors');

async function createFirst1(req, res, next) {
    try {
        const { x, y } = req.body;
        if (x.length !== y.length) {
            throw new Error('Вектори мають різний розмір');
        }

        let res = 0;
        for (let i = 0; i < x.length; i++) {
            res += x[i] * y[i];
        }


        res.locals.res = res;
        res.json({
            firstSchema: req.body,
            res: res
        });

        next();
    } catch (err) {
        next(err);
    }
};
async function createFirst(req, res, next) {
    try {
        const newFirst = await mathService.createFirst(req.body);

        res.status(200).json({
            status: 200,
            data: newFirst,
        });
    } catch (err) {
        next(createError.InternalServerError(err.message));
    }
};
async function createSecond2(req, res, next) {
    try {
        const { x, n } = req.body;
        let res = 0;
        for (let i = 0; i < n; i++) {
            res += Math.pow(Math.sin(x), i);
        }


        res.locals.res = res;
        res.json({
            secondSchema: req.body,
            res: res
        });

        next();
    } catch (err) {
        next(err);
    }
};
async function createSecond(req, res, next) {
    try {
        const newSecond = await mathService.createSecond(req.body);

        res.status(200).json({
            status: 200,
            data: newSecond,
        });
    } catch (err) {
        next(createError.InternalServerError(err.message));
    }
};
module.exports = {
    createFirst,
    createSecond,
    createFirst1,
    createSecond2
}
