const Repository = require('../../../repositories/user');

module.exports = (req, res) => {

    Repository.create(req.body.data.user, (data) => res.json(data));

};
