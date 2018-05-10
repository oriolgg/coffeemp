const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const schema = new mongoose.Schema({

    name: {
        type: String,
        required: true,
        unique: true
    },
    intensity: {
        type: Number,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    }

});
schema.plugin(uniqueValidator)

module.exports = mongoose.model('Coffee', schema);
