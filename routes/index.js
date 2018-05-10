module.exports = (app) => {

    /**
     * Index
     */
    app.get('/api/v1/', (req, res) => res.json('ok'));

    /**
     * User
     */
    app.use('/api/v1/users', require('./user/user'));

    /**
     * Coffee
     */
    app.use('/api/v1/coffees', require('./coffee/coffee'));

    /**
     * Orders
     */
    app.use('/api/v1/orders', require('./order/order'));

};
