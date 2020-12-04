require('dotenv').config()
var axios = require("axios").default;
const apiKey = process.env.ATTRACTIONS_APIKEY;

async function getLatLon(query) {
    try{ 
        var otmAPI =
          "https://api.opentripmap.com/0.1/en/places/" +
          "geoname?apikey=" +
          apiKey;
        if (query !== undefined) {
          otmAPI += "&name=" + query;
        }
        var getURL = await axios.get(otmAPI)
        console.log("Looking for the URL", getURL.data);
        return getURL.data;
    } catch(err) {
        console.log(err)
    }
    }

    module.exports = getLatLon;