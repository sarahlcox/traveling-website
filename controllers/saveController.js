const { User, Search } = require("../models");
const mongojs = require("mongojs");

const save = {
    // post search info
    saveSearch: (req, res) => {
        const searchObj = {
            city1: req.body.city1,
            city2: req.body.city2,
            stateCode: req.body.stateCode,
            outboundDate: req.body.outboundDate
        }
        Search.create(searchObj)
            .then(() => User.findByIdAndUpdate({ _id: mongojs.ObjectId(req.body.userId) }, { $push: { search: searchObj} }, { new: true }))
            .then(userSearch => {
                res.json(userSearch);
            })
            .catch(err => {
                res.json(err);
            });
    },
    // get search info stored in db - users
    getSearch: (req, res) => {
        User.findById(req.params.id).then((data) => {
            const mySearchList = data.search;
            res.json(mySearchList);
        })       
    }
};

module.exports = save;