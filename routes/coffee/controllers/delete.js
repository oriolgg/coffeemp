const Repository = require('../../../repositories/coffee');

module.exports = (req, res) => {

    let id = req.params.id;

    Repository.remove(id, (data) => res.json(data));

};

