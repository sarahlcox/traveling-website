const { User, Search } = require("../models");
const mongojs = require("mongojs");

async function getList(index) {
    return index.map((index) => {

        Search.findById(index).then(searchRes => {
            console.log("get search res", searchRes);
            return searchRes;
            // res.json(searchRes); // returns one object only
        })
    })
}


const save = {
    saveSearch: (req, res) => {
        // console.log(req.body.userId);
        const searchO = {     city1: req.body.city1,
            city2: req.body.city2,
            stateCode: req.body.stateCode,
            outboundDate: req.body.outboundDate}
        Search.create({
         searchO
        })
            .then(({}) => User.findByIdAndUpdate({ _id: mongojs.ObjectId(req.body.userId) }, { $push: { search: searchO} }, { new: true }))
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
            console.log("data search",data.search);
            const mySearchList = data.search;
            // console.log("mysearches",mySearchList)
            res.json(mySearchList)

        })
       
    }

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

};

module.exports = save;