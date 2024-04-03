const Joi = require('joi');

const SecondCreateSchema = Joi.object({
    x: Joi.number()

        .required(),
    n: Joi.number()
        .min(1)
        .required(),
    res: Joi.number()
    ,




});

module.exports = {
    SecondCreateSchema
};
