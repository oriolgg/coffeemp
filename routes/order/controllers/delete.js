const Repository = require('../../../repositories/order');

module.exports = (req, res) => {

    let id = req.params.id;

    Repository.remove(id, (data) => res.json(data));

};

