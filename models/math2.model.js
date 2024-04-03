const { Schema, model } = require('mongoose');

const secondSchema = new Schema({
    x: {
        type: Number,
        required: true,
        trim: true,
    },
    n: {
        type: Number,
        required: true,
        trim: true,
    },
    res: {
        type: Number,
        trim: true,
    }
},
    { timestamps: true })

module.exports = model('math2', secondSchema)