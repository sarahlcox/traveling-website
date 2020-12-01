const axios = require("axios").default;

function getLocationID(city){
  var options = {
    method: 'GET',
    url: 'https://hotels4.p.rapidapi.com/locations/search',
    params: {query: city, locale: 'en_US'},
    headers: {
      'x-rapidapi-key': process.env.HOTELS_APIKEY,
      'x-rapidapi-host': 'hotels4.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    console.log("data" ,response.data.suggestions[0].entities[0].destinationId);
  }).catch(function (error) {
    console.error(error);
  });
}

module.exports = getLocationID;