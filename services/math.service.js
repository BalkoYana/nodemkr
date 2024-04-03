const firstModel = require('../models/math.model.js');
const secondModel = require('../models/math2.model.js');

async function createFirst(x, y) {

    return firstModel.create(x, y)

}

async function createSecond(x, n) {

    return secondModel.create(x, n)

}

module.exports = {
    createFirst,
    createSecond,

};

