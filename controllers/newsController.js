var axios = require("axios");
var getCovidData = require("./newsHelper/covidStates")

const newsController = {
getNews : async function (req, res){
    const covidData = await getCovidData(req.params.stateCode);
    res.json(covidData)
        }
}
module.exports = newsController;