var axios = require("axios").default;
async function getCityID(city){
var options = {
  method: 'GET',
  url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/',
  params: {query: city},
  headers: {
    'x-rapidapi-key': 'a0e26770e6mshacbd79b3c68c795p142795jsn2d20c01986cc',
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
  }
};

var axiosreq = await axios.request(options);

    console.log("CityId function" ,axiosreq.data.Places[0].PlaceId);
    return axiosreq.data.Places[0].PlaceId;

}

// getCityID("Chicago")

module.exports = getCityID;
// getCityID("Evanston");