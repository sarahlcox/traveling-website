var axios = require("axios").default;
async function getCityID(city){
var options = {
  method: 'GET',
  url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/',
  params: {query: city},
  headers: {
    // 'x-rapidapi-key': process.env.SKYSCANNER_APIKEY,
    'x-rapidapi-key': "7dcf6971efmsh2b5b307fb82b775p1fea69jsnb0c671460573",
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
  }
};

var axiosreq = await axios.request(options);

    // console.log("CityId function" ,axiosreq.data.Places[0].PlaceId);
    return axiosreq.data.Places[0].PlaceId;

}


module.exports = getCityID;
// getCityID("Evanston");