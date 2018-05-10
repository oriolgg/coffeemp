const Repository = require('../../../repositories/order');

module.exports = (req, res) => {

    Repository.all((data) => res.json(data));

};
