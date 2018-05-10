const Repository = require('../../../repositories/coffee');

module.exports = (req, res) => {

    Repository.all((data) => res.json(data));

};
