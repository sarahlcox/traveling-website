const getAttractionList = require("./attractionsHelper/attractionList");

const attractions = {
    getAttractions: async function (req, res) {
        console.log("city2",req.body)
        const attractionsList = await getAttractionList(req.body.city2);
        res.json(attractionsList);
    }
}

module.exports = attractions;