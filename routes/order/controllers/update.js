const Repository = require('../../../repositories/order');

module.exports = (req, res) => {

    let id = req.params.id;

    Repository.update(id, req.body.data.order, (data) => res.json(data));

};

