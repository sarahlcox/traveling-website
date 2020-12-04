const getLocationID = require("./hotelsHelper/hotelCityID");
const getHotelList = require("./hotelsHelper/hotelsList");

const hotels = {
    getHotels: async function (req, res) {
        const hotelsList = await getHotelList(req.body.city2);
        console.log("hl,", hotelsList)
        res.json(hotelsList);
    }
}

module.exports = hotels;