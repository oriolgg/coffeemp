module.exports = (app) => {

    /**
     * Index
     */
    app.get('/v1/', (req, res) => res.json('ok'));

    /**
     * User
     */
    app.use('/v1/users', require('./user/user'));

    /**
     * Coffee
     */
    app.use('/v1/coffees', require('./coffee/coffee'));

    /**
     * Orders
     */
    app.use('/v1/orders', require('./order/order'));

};
