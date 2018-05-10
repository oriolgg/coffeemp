const Repository = require('../../../repositories/order');

module.exports = (req, res) => {

    Repository.create(req.body.data.order, (data) => {
        if (data.error == true) {
            return res.status(500).json(data);
        }
        return res.json(data);
    });

};
