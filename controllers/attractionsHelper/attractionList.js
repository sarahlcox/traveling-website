const apiKey = process.env.ATTRACTIONS_APIKEY;
const fetch = require("node-fetch");


function getAttractionList(query) {
    return new Promise(function(resolve, reject) {
      var otmAPI =
        "https://api.opentripmap.com/0.1/en/places/" +
        "geoname" +
        "?apikey=" +
        apiKey;
      if (query !== undefined) {
        otmAPI += "&" + query;
      }
      fetch(otmAPI)
        .then(response => response.json())
        .then(data => {console.log("fetch log",data), resolve(data)})
        .catch(function(err) {
          console.log("Fetch Error :-S", err);
        });
    });
  }

getAttractionList ("name=Chicago");
module.export = getAttractionList;