const User = require('../models/user');

module.exports = {

    all: (cb) => {
        User.find({}, (err, users) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            } else {
                data = {
                    'data': {users}
                };
            }

            return cb(data);

        });

    },
    get: (id, cb) => {

        User.findById(id, (err, user) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            } else {
                data = {
                    'data': {user}
                };
            }

            return cb(data);

        });
    },
    create: (data, cb) => {
        let user = {
            username: data.username,
            password: data.password,
            role: data.role
        };

        User.create(user, (err, user) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            } else {
                data = {
                    'data': {user}
                };
            }

            return cb(data);
        });
    },
    update: (id, data, cb) => {
        User.update({'_id': id}, {$set: data}, (err) => {

            let data = {};

            if (err) {
                data = {
                    error: true,
                    error_message: err
                };
            }

            User.findById(id, (err, user) => {
                if (err) {
                    data = {
                        error: true,
                        error_message: err
                    };
                } else {
                    data = {
                        'data': {user}
                    };
                }

                return cb(data);
            });

            return true;

        });
    },
    remove: (id, cb) => {
        User.findByIdAndRemove(id, (err) => {

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
