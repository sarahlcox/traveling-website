const { User, Search } = require("../../models");

const save = {
    saveSearch: (req, res) => {
        console.log(req.body);
        Search.create(req.body)
        .then(({ _id }) => User.findOneAndUpdate({}, { $push: { search: _id } }, { new: true }))
        .then(userSearch => {
        res.json(userSearch);
        })
        .catch(err => {
        res.json(err);
        });
    }
};

module.exports = save;