const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const schema = new mongoose.Schema({

    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true,
        enum: ["admin", "customer"]
    }

});
schema.plugin(uniqueValidator)

module.exports = mongoose.model('User', schema);
