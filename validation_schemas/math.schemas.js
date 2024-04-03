const Joi = require('joi');

const FirstCreateSchema = Joi.object({
    x: Joi.string()
        .min(2)
        .max(60)
        .required(),
    res: Joi.number()
    ,

    y: Joi.number()
        .min(1)
        .max(131)
        .required(),


});

module.exports = {
    FirstCreateSchema
};
