const { User, Search } = require("../models");
const mongojs = require("mongojs");

const save = {
    saveSearch: (req, res) => {
        // console.log(req.body.userId);
        Search.create({
            city1: req.body.city1,
            city2: req.body.city2,
            stateCode: req.body.stateCode,
            outboundDate: req.body.outboundDate
        })
        .then(({ _id }) => User.findByIdAndUpdate({_id:mongojs.ObjectId(req.body.userId)}, { $push: { search: _id } }, { new: true }))
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
                    console.log("get search res", searchRes);
                    // return searchRes;
                    // res.json(searchRes); // returns one object only
                })
            })
        })

        // returns [{},{}] array of empty object
        /*
        User.findById(req.params.id).then(async function (data) {
            // console.log("data", data);
            function searchList() {
                let searchArr = [];
                data.search.forEach(entryId => {
                    const searchObj = Search.findById(mongojs.ObjectId(entryId))
                    .then(searchRes => {
                        // console.log("all searches", searchRes);
                        return searchRes;
                        // res.json(searchRes); // returns one object only
                    });
                    searchArr.push(searchObj);
                });
                return searchArr;
            }
            const savedSearches = await searchList();
            res.json(savedSearches);
            // res.json(searches); // [null, null]
            // console.log(User.find().then(data => data));
            res.json(data.search)
        })
        */
    }
};

module.exports = save;