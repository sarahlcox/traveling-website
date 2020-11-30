const axios = require("axios").default;

async function getLocationID(city){
  var options = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/locations/search',
    params: {query: city, locale: 'en_US'},
    headers: {
      'x-rapidapi-key': process.env.HOTELS_APIKEY,
      'x-rapidapi-host': 'hotels4.p.rapidapi.com'
    }
  };

  var hotelReq = await axios.request(options);
  console.log("ID info", hotelReq.data.suggestions[0].entities[1]);
  return hotelReq.data.suggestions[0].entities[1].destinationId;
}

module.exports = getLocationID;