const { User, Search } = require("../models");

const save = {
    saveSearch: (req, res) => {
        // console.log(req.body);
        Search.create(req.body)
        .then(({ _id }) => User.findOneAndUpdate({}, { $push: { search: _id } }, { new: true }))
        .then(userSearch => {
        res.json(userSearch);
        })
        .catch(err => {
        res.json(err);
        });
    },
    getSearch: (req, res) => {
        // console.log("backend id", req.params.id);
        User.findById(req.params.id).then((data) => {
            // console.log(data.search);
            // let searches = 
            data.search.map(entryId => {
                Search.findById(entryId).then(searchRes => {
                    console.log(searchRes);
                    return searchRes;
                    // res.json(searchRes); // returns one object only
                })
            })
            // res.json(searches); // [null, null]
            // console.log(searches);
        })
    }
};

module.exports = save;