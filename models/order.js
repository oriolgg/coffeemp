const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const Coffee = require('../models/coffee');
const User = require('../models/user');

const schema = new mongoose.Schema({

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    coffee: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Coffee',
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }

});
schema.plugin(uniqueValidator)

schema.pre('save', function (next) {
    var self = this;
    Coffee.findById(self.coffee, (err, coffee) => {
        if (coffee){
            next();
        } else {                
            next(new Error("Coffee not exists!"));
        }
    });
    User.findById(self.user, (err, user) => {
        if (user){
            next();
        } else {                
            next(new Error("User not exists!"));
        }
    });
});

schema.post('save', function (order, next) {
    var self = this;
    Coffee.findById(self.coffee, (err, coffee) => {
        if (coffee) {
            coffee.stock = coffee.stock - self.quantity;
            coffee.save();
        }
    });
});

module.exports = mongoose.model('Order', schema);
