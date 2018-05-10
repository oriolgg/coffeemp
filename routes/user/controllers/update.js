const Repository = require('../../../repositories/user');

module.exports = (req, res) => {

    let id = req.params.id;

    Repository.update(id, req.body.data.user, (data) => res.json(data));

};

