const getLocationID = require("./hotelsHelper/hotelCityID");
const getHotelList = require("./hotelsHelper/hotelsList");

const hotels = {
    getHotels: async function (req, res) {
        await getLocationID(req.body.city2);
        // const hotelsList = await getHotelList(req.body.city2);
        // res.json(hotelsList);
        // console.log(hotelsList);
    }
}

module.exports = hotels;