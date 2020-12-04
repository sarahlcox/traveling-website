require('dotenv').config();
const axios = require("axios").default;
const getLocationID = require("./hotelCityID");

async function getHotelList(city){
  var options = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/properties/list',
    params: {
      destinationId: await getLocationID(city),
      pageNumber: '1',
      checkIn: '2020-01-08',
      checkOut: '2020-01-15',
      pageSize: '25',
      adults1: '1',
      currency: 'USD',
      locale: 'en_US',
      sortOrder: 'PRICE'
    },
    headers: {
      'x-rapidapi-key': process.env.HOTELS_APIKEY,
      'x-rapidapi-host': 'hotels4.p.rapidapi.com'
    }
  };
  
  return axios.request(options).then(function (response) {
    return response.data.data.body.searchResults.results;
  }).catch(function (error) {
    console.error(error);
  });
}

module.exports = getHotelList;