const Joi = require('joi');

const SecondCreateSchema = Joi.object({
    x: Joi.string()
        .min(2)
        .max(60)
        .required(),
    res: Joi.number()
    ,




});

module.exports = {
    SecondCreateSchema
};
