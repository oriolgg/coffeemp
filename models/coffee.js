const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const winston = require('winston');

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

schema.pre('save', function (next) {
    this.wasNew = this.isNew;
    next();
});

schema.post('save', function (doc) {
    if (this.wasNew) {
        winston.log("info", "SET COFFEE -> " + JSON.stringify(doc));
    }
});

module.exports = mongoose.model('Coffee', schema);
