const Repository = require('../../../repositories/coffee');

module.exports = (req, res) => {

    Repository.create(req.body.data.coffee, (data) => {
        if (data.error == true) {
            return res.status(500).json(data);
        }
        return res.json(data);
    });

};
