const { Schema, model } = require('mongoose');

const firstSchema = new Schema({
    x: {
        type: Number,
        required: true,
        trim: true,
    },
    y: {
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

module.exports = model('math', firstSchema)