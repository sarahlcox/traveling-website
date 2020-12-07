var getFlightPrice = require("./flightsHelper/skyscanPrice")
const skyscanner = {
    getPrice: async function (req, res){
        const testPrice = await getFlightPrice(req.body.city1, req.body.city2, req.body.outboundDate)
        res.json(testPrice)
    }
}
// skyscanner.getPrice("chicago");
module.exports = skyscanner;