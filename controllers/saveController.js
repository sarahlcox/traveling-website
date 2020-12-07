const { User, Search } = require("../models");

const save = {
    saveSearch: (req, res) => {
        // console.log(req.body);
        var id = req.body.userId
        Search.create(req.body)
        .then(({ _id }) => User.findOneAndUpdate({id}, { $push: { search: _id } }, { new: true }))
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
            console.log(data);
            // let searches = 
            data.search.map(entryId => {
                Search.findById(entryId).then(searchRes => {
                    console.log(User);
                    return searchRes;
                    // res.json(searchRes); // returns one object only
                })
            })
            // res.json(searches); // [null, null]
            // console.log(User.find().then(data => data));
            res.json(data.search)
        })
    }
};

module.exports = save;