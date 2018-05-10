const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')
const winston = require('winston');
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
            if (self.quantity > coffee.stock) {
                winston.log('info', 'ERROR SET ORDER -> out of stock');
                next(new Error("Out of stock"));
            }
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

schema.post('save', function (doc, next) {
    var self = this;
    winston.log('info', 'SET ORDER -> order ' + self.quantity + ' units of coffee -> ' + JSON.stringify(self));
    Coffee.findById(self.coffee, (err, coffee) => {
        if (coffee) {
            coffee.stock = coffee.stock - self.quantity;
            coffee.save();
            winston.log('info', 'UPDATE COFFEE ' + coffee.id + ' -> ' + self.quantity + ' units of coffee consumed -> ' + JSON.stringify(coffee));
        }
    });
    next();
});

module.exports = mongoose.model('Order', schema);
