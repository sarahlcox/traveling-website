require('dotenv').config()
var axios = require("axios").default;
const apiKey = process.env.ATTRACTIONS_APIKEY;
const attractions = require('../attractionController');
const getLatLon = require("./attractionLatLon");

async function getAttractionList(query) {
    try {
    var {lat,lon} = await getLatLon(query);
    var otmAPI =
      "https://api.opentripmap.com/0.1/en/places/" +
      "autosuggest?apikey="+apiKey+"&name=" + query + "&radius=42500&lon="+lon+"&lat="+lat+""
    if (query !== undefined) {
      otmAPI += "&name=" + query;
    }
    var attractionResults = await axios.get(otmAPI)
    var featuresArray = attractionResults.data.features;
    var tourismArray = featuresArray.map(feature => feature.properties)
    console.log("looking for good things", tourismArray);
    return tourismArray;
  } catch (err) {
    console.log(err)
  }
}

module.exports = getAttractionList;