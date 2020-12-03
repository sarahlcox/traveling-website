const apiKey = "5ae2e3f221c38a28845f05b6b35402875d65b75dc7b74901239bac9b";
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