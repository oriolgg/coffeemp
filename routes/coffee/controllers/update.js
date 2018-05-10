const Repository = require('../../../repositories/coffee');

module.exports = (req, res) => {

    let id = req.params.id;

    Repository.update(id, req.body.data.coffee, (data) => res.json(data));

};

