const Joi = require('joi');

const FirstCreateSchema = Joi.object({
    x: Joi.array()
        .min(2)
        .max(3)
        .required(),
    res: Joi.number()
    ,

    y: Joi.array()
        .min(2)
        .max(3)
        .required(),


});

module.exports = {
    FirstCreateSchema
};
