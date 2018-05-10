const Coffee = require('../models/coffee');

module.exports = {

    all: (cb) => {
        Coffee.find({}, (err, coffees) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            } else {
                data = {
                    'data': {coffees}
                };
            }

            return cb(data);

        });

    },
    get: (id, cb) => {

        Coffee.findById(id, (err, coffee) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            } else {
                data = {
                    'data': {coffee}
                };
            }

            return cb(data);

        });
    },
    create: (data, cb) => {
        let coffee = {
            name: data.name,
            intensity: data.intensity,
            price: data.price,
            stock: data.stock
        };

        Coffee.create(coffee, (err, coffee) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            } else {
                data = {
                    'data': {coffee}
                };
            }

            return cb(data);
        });
    },
    update: (id, data, cb) => {
        Coffee.update({'_id': id}, {$set: data}, (err) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }

            Coffee.findById(id, (err, coffee) => {
                if (err) {
                    data = {
                        error: true,
                        error_message: err
                    };
                } else {
                    data = {
                        'data': {coffee}
                    };
                }

                return cb(data);
            });

            return true;

        });
    },
    remove: (id, cb) => {
        Coffee.findByIdAndRemove(id, (err) => {

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
