const getAttractionList = require("./attractionsHelper/attractionList");

const attractions = {
    getAttractions: async function (req, res) {
        const attractionsList = await getAttractionList(req.body.city2);
        res.json(attractionsList);
    }
}

module.exports = attractions;