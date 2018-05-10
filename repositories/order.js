const Order = require('../models/order');

module.exports = {

    all: (cb) => {
        Order.find({}, (err, orders) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            } else {
                data = {
                    'data': {orders}
                };
            }

            return cb(data);

        });

    },
    get: (id, cb) => {

        Order.findById(id, (err, order) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            } else {
                data = {
                    'data': {order}
                };
            }

            return cb(data);

        });
    },
    create: (data, cb) => {
        let order = {
            user: data.user,
            coffee: data.coffee,
            amount: data.amount,
            quantity: data.quantity
        };

        Order.create(order, (err, order) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            } else {
                data = {
                    'data': {order}
                };
            }

            return cb(data);
        });
    },
    update: (id, data, cb) => {
        Order.update({'_id': id}, {$set: data}, (err) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }

            Order.findById(id, (err, order) => {
                if (err) {
                    data = {
                        error: true,
                        error_message: err
                    };
                } else {
                    data = {
                        'data': {order}
                    };
                }

                return cb(data);
            });

            return true;

        });
    },
    remove: (id, cb) => {
        Order.findByIdAndRemove(id, (err) => {

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            } else {
                data = {
                    status: true
                };
            }

            return cb(data);

        });
    }

};
