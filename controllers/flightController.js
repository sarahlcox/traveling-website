var axios = require("axios");
const skyscanner = {

getPrice : function (req,res) {
  console.log(req);
var options = {
  method: 'GET',
  url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/',
  params: {query: "Chicago"},
  headers: {
    'x-rapidapi-key': process.env.SKYSCANNER_APIKEY,
    'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
  }
};

axios.request(options).then(function(response){
console.log(response.data.Places[0].PlaceId);
res.json(response.data.Places[0].PlaceId);
//nest the price the api here
});

  

}




}
// test.getPrice("chicago");
module.exports = skyscanner;