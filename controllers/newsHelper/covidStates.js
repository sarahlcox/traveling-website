require('dotenv').config()
const axios = require("axios").default;

async function getCovidData(stateCode){
  var options = {
    method: 'GET',
    url: 'https://api.covidtracking.com/v1/states/'+stateCode+'/current.json'
  };
  
  return axios.request(options).then(function (response) {
    return response.data;
  }).catch(function (error) {
    console.error(error);
  });
}

module.exports = getCovidData;
