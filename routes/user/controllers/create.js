const Repository = require('../../../repositories/user');

module.exports = (req, res) => {

    Repository.create(req.body.data.user, (data) => {
        if (data.error == true) {
            return res.status(500).json(data);
        }
        return res.json(data);
    });

};
