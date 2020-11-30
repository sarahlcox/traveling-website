


var getFlightPrice = require("./flightsHelper/skyscanPrice")
// const result = dotenv.config()
// console.log("env", process.env)
const skyscanner = {

getPrice: async function (req, res){
    console.log("my Req", req.body);
    const testPrice = await getFlightPrice(req.body.city1, req.body.city2, req.body.outboundDate)
    // console.log("Testing Price", testPrice.data)
    res.json(testPrice.data)
}

// function (req,res) {

// var options = {
//   method: 'GET',
//   url: 'https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/US/USD/en-US/',
//   params: {query: "Chicago"},
//   headers: {
//     'x-rapidapi-key':process.env.SKYSCANNER_APIKEY,
//     'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function(response){
// console.log("api key", process.env.SKYSCANNER_APIKEY);
// res.json(response.data.Places[0].PlaceId);
// //nest the price the api here
// });



// }

}
// skyscanner.getPrice("chicago");
module.exports = skyscanner;