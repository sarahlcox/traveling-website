let getCityID = require("./skyscanID") 

var axios = require("axios").default;
async function getFlightPrice(city1, city2, departureDate){
    var cityOne = await getCityID(city1);
    var cityTwo = await getCityID(city2);
    // console.log("Should be city ID",city1)
    var outboundDate = departureDate
    var options = {
    method: 'GET',
    url: "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browsequotes/v1.0/US/USD/en-US/"+cityOne+"/"+cityTwo+"/"+ outboundDate,
    
    headers: {
        'x-rapidapi-key': process.env.SKYSCANNER_APIKEY,
        'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
    }
    };

    return axios.request(options).then(function (response) {
        // console.log("sky2L20", response.data);
        return response;
    }).catch(function (error) {
        console.error(error);
        // return error;
    });
}
// getFlightPrice("Chicago", "New York", "2020-12-01").then(res => console.log("sky2L27", res.data))
module.exports = getFlightPrice;