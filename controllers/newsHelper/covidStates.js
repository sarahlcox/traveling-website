var axios = require("axios").default;
async function getState(){
  console.log("covid state?");
var options = {
  method: 'GET',
  url: 'https://covidtracking.com/api/states',
//   headers: {
//     'x-rapidapi-key': process.env.SKYSCANNER_APIKEY,
//     'x-rapidapi-host': 'skyscanner-skyscanner-flight-search-v1.p.rapidapi.com'
//   }
};

var axiosreq = await axios.request(options);

    // console.log("State Function" ,axiosreq.data);
    return axiosreq.data;

}

// getCityID("Chicago")

module.exports = getState;
// getCityID("Evanston");